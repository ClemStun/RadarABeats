import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor() { }

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
    
  }

}
