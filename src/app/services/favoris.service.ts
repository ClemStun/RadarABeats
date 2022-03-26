import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from './connexion.service';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  favComp: any;

  constructor(private http: HttpClient, private _connexion: ConnexionService) { }

  async getFavoris(){

    let login = this._connexion.getLogin();

    if(login == "") return; //Utilisateur non connecté !

    //Récupération des favoris
    await this.http.get("http://localhost:8080/favoris?login=" + login, {responseType: "json"}).toPromise().then((res: any) => {

      if(res != []){//Si il a des favoris

        this.favComp.setFavListe(res);

      }

    })

  }

  setFavComp(comp: any){
    this.favComp = comp;
  }

}
