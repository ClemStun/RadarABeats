import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as sjcl from 'sjcl';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  url: string;

  constructor(private http:HttpClient) { 
    this.url = "http://localhost:8080/";
  }

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

  connexion(){

  }

  inscription(){
    
    //Récupération des information d'inscription
    let pseudo = (<HTMLInputElement>document.getElementById("pseudo-ins")).value;
    let pw = (<HTMLInputElement>document.getElementById("pw-ins")).value;
    let pwc = (<HTMLInputElement>document.getElementById("pwc-ins")).value;
    
    //Check match des mot de passes
    if(pw == pwc){

      //Chiffrage du mot de passe
      const pwh = sjcl.hash.sha256.hash(pw);
      const pwch = sjcl.codec.hex.fromBits(pwh);

      //Envoie de laa requete d'inscription
      this.http.get(this.url + "register?login=" + pseudo + "&pw=" + pwch, {responseType: "json"}).toPromise().then((res: any) => {

        //Si l'inscription a réussi
        if(res.register == true){

          //Reset de l'affichage
          (<HTMLInputElement>document.getElementById('log-window')).classList.remove('active-log');
          (<HTMLInputElement>document.getElementById('log-window')).classList.add('unactive-log');
          (<HTMLInputElement>document.getElementById('darker')).classList.remove('activeDarker');
          (<HTMLInputElement>document.getElementById('darker')).classList.add('inactiveDarker');
          (<HTMLInputElement>document.getElementById('error-ins')).classList.remove('active-err');
          (<HTMLInputElement>document.getElementById('error-ins')).classList.add('inactive-err');

        }else{

          //Affichage message d'erreur
          (<HTMLInputElement>document.getElementById('error-ins')).innerHTML = res.message;
          (<HTMLInputElement>document.getElementById('error-ins')).classList.add('active-err');
          (<HTMLInputElement>document.getElementById('error-ins')).classList.remove('inactive-err');

        }
        
        
      })
      
    }else{
      
      //affichage message d'erreur
      (<HTMLInputElement>document.getElementById('error-ins')).innerHTML = "Les mots de passes ne correspondent pas !";
      (<HTMLInputElement>document.getElementById('error-ins')).classList.add('active-err');
      (<HTMLInputElement>document.getElementById('error-ins')).classList.remove('inactive-err');
      
    }
    
    //reset des champs
    (<HTMLInputElement>document.getElementById("pseudo-ins")).value = "";
    (<HTMLInputElement>document.getElementById("pw-ins")).value = "";
    (<HTMLInputElement>document.getElementById("pwc-ins")).value = "";

  }

}
