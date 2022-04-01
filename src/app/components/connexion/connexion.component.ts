import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as sjcl from 'sjcl';
import { ConnexionService } from 'src/app/services/connexion.service';
import { FavorisService } from 'src/app/services/favoris.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private http:HttpClient, private connexionService: ConnexionService, private _favoris: FavorisService) { }

  ngOnInit(): void {
  }

  setConnexion(choice: boolean): any{

    if(choice){
      (<HTMLInputElement>document.getElementById('background-selec')).classList.remove('choix-right');
      (<HTMLInputElement>document.getElementById('background-selec')).classList.add('choix-left');
      (<HTMLInputElement>document.getElementById('connexion-form')).classList.add('active-choix');
      (<HTMLInputElement>document.getElementById('enregistrer-form')).classList.remove('active-choix');
    }else{
      (<HTMLInputElement>document.getElementById('background-selec')).classList.add('choix-right');
      (<HTMLInputElement>document.getElementById('background-selec')).classList.remove('choix-left');
      (<HTMLInputElement>document.getElementById('connexion-form')).classList.remove('active-choix');
      (<HTMLInputElement>document.getElementById('enregistrer-form')).classList.add('active-choix');
    }

  }

  /**
   * Lance la connexion de l'utilisatueur
   */
  connexion(pseudo: string = "", pw: string = ""){

    //Récupération des informations de connexion
    if(pseudo == "") pseudo = (<HTMLInputElement>document.getElementById("pseudo-con")).value;
    if(pw == "") pw = (<HTMLInputElement>document.getElementById("pw-con")).value;

    //Chiffrage mot de passe
    const pwh = sjcl.hash.sha256.hash(pw);
    const pwch = sjcl.codec.hex.fromBits(pwh);

    //Envoie de la requete d'inscription
    this.http.get(environment.database.url + "login?login=" + pseudo + "&pw=" + pwch, {responseType: "json"}).toPromise().then((res :any) => {

      if(res.connexion == true){

        this.connexionService.setLogin(pseudo);
        this._favoris.getFavoris();
        (<HTMLInputElement>document.getElementById("condec")).innerHTML = "Deconnexion";
        this.popUp();

      }else{
        this.printError("error-con", res.message);
      }
      
    })
    
    this.resetDisplay();

  }

  /**
   * Lance l'inscription de l'utilisateur
   */
  inscription(){
    
    //Récupération des informations d'inscription
    let pseudo = (<HTMLInputElement>document.getElementById("pseudo-ins")).value;
    let pw = (<HTMLInputElement>document.getElementById("pw-ins")).value;
    let pwc = (<HTMLInputElement>document.getElementById("pwc-ins")).value;

    if(pseudo.match(/\s/) != null || pseudo == "" || pseudo == "accounts"){
      this.printError("error-ins", "Login incorrect");
      return;
    }
    
    //Check match des mot de passes
    if(pw === pwc){

      //Chiffrage du mot de passe
      const pwh = sjcl.hash.sha256.hash(pw);
      const pwch = sjcl.codec.hex.fromBits(pwh);

      //Envoie de la requete d'inscription
      this.http.get(environment.database.url + "register?login=" + pseudo + "&pw=" + pwch, {responseType: "json"}).toPromise().then((res: any) => {

        //Si l'inscription a réussi
        if(res.register == true){

          this.connexion(pseudo, pw)

        }else{
          this.printError("error-ins", res.message);
        }
        
        
      })
      
    }else{
      this.printError("error-ins", "Les mots de passe ne correspondent pas !");
      return; 
    }
    
    this.resetDisplay();
    
  }

  /**
   * Affiche une erreur !
   * 
   * @param id id de la balise d'affichage
   * @param msg message a afficher
   */
  printError(id: string, msg: string){

    (<HTMLInputElement>document.getElementById(id)).innerHTML = msg;
    (<HTMLInputElement>document.getElementById(id)).classList.remove('inactive-err');
    (<HTMLInputElement>document.getElementById(id)).classList.add('active-err');

  }

  /**
   * 
   */
  popUp(){
    (<HTMLInputElement>document.getElementById('popup')).classList.remove('inactive-pop');
    (<HTMLInputElement>document.getElementById('popup')).classList.add('active-pop');
  }

  /**
   * Remet l'affichage à zero
   */
  resetDisplay(){

    //fenetre
    (<HTMLInputElement>document.getElementById('log-window')).classList.remove('active-log');
    (<HTMLInputElement>document.getElementById('log-window')).classList.add('unactive-log');
    (<HTMLInputElement>document.getElementById('darker')).classList.remove('activeDarker');
    (<HTMLInputElement>document.getElementById('darker')).classList.add('inactiveDarker');

    //erreurs
    (<HTMLInputElement>document.getElementById('error-ins')).classList.remove('active-err');
    (<HTMLInputElement>document.getElementById('error-ins')).classList.add('inactive-err');
    (<HTMLInputElement>document.getElementById('error-con')).classList.remove('active-err');
    (<HTMLInputElement>document.getElementById('error-con')).classList.add('inactive-err');

    //Champs inscription
    (<HTMLInputElement>document.getElementById("pseudo-ins")).value = "";
    (<HTMLInputElement>document.getElementById("pw-ins")).value = "";
    (<HTMLInputElement>document.getElementById("pwc-ins")).value = "";

    //Champs connexion
    (<HTMLInputElement>document.getElementById("pseudo-con")).value = "";
    (<HTMLInputElement>document.getElementById("pw-con")).value = "";

  }

}
