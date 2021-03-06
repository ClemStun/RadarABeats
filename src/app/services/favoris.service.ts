import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from './connexion.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  
  favorisListe: any[] = [];

  constructor(private http: HttpClient, private _connexion: ConnexionService) { }

  /**
   * Récupère les favoris de l'utilisateur
   */
  async getFavoris(){

    let login = this._connexion.getLogin();

    if(login == "") return; //Utilisateur non connecté !

    //Récupération des favoris
    await this.http.get(environment.database.url + "favoris?login=" + login, {responseType: "json"}).toPromise().then((res: any) => {

      if(res != []){//S'il a des favoris
        this.favorisListe = res;
        this.favorisListe.forEach(e => e.link = "https://www.youtube.com/embed/" + e.link);
      }

    })

  }

  /**
   * Ajoute la musique en favoris
   * 
   * @param title titre de la musique
   * @param artiste artiste de la musique
   * @param link url de la video
   */
  async addFavoris(title: string, artiste: string, link: string){
    
    let login = this._connexion.getLogin();

    //Utilisateur non connecté
    if(login == "") return;

    //Le son est déjà dans les favoris de l'utilisteur
    if(this.isFavoris(title, artiste)) return;

    await this.http.get(environment.database.url + "favorisadd?login=" + login + "&title=" + title + "&artiste=" + artiste + "&link=" + link, {responseType: "json"}).toPromise().then((res: any) => {

      console.log(res);
      this.getFavoris(); //mis a jour des favoris

    }).catch((e: any) => {
      console.log(e);
    })

  }

  /**
   * Retire la musique des favoris favoris
   * 
   * @param title titre de la musique
   * @param artiste artiste de la musique
   */
   async removeFavoris(title: string, artiste: string){
    
    let login = this._connexion.getLogin();

    //Utilisateur non connecté
    if(login == "") return;

    //Le son est déjà dans les favoris de l'utilisteur
    if(this.isFavoris(title, artiste) == false) return;

    await this.http.get(environment.database.url + "favorisremove?login=" + login + "&title=" + title + "&artiste=" + artiste, {responseType: "json"}).toPromise().then((res: any) => {

      console.log(res);
      this.getFavoris(); //mis a jour des favoris

    }).catch((e: any) => {
      console.log(e);
    })

  }

  /**
   * Test si une musique est déjà en favoris
   * 
   * @param title titre de la musique
   * @param artiste artiste de la musique
   * @returns vrai si le son est déjà en favoris
   */
  isFavoris(title: string, artiste: string){

    if(this.favorisListe.find(song => {
      return song.title == title && song.artiste == artiste
    }) != null) return true;

    return false;

  }

  resetFavorisListe(){
    this.favorisListe = [];
  }

}
