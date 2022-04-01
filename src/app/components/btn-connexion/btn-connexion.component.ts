import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';
import { FavorisService } from 'src/app/services/favoris.service';

@Component({
  selector: 'app-btn-connexion',
  templateUrl: './btn-connexion.component.html',
  styleUrls: ['./btn-connexion.component.scss']
})
export class BtnConnexionComponent implements OnInit {

  constructor(private _connexion: ConnexionService, private _favoris: FavorisService) { }

  ngOnInit(): void {
  }

  connexionMenu(): any{

    //Affichage du menu de connexion
    if((<HTMLInputElement>document.getElementById("condec")).textContent != "Deconnexion"){

      (<HTMLInputElement>document.getElementById('log-window')).classList.remove('unactive-log');
      (<HTMLInputElement>document.getElementById('log-window')).classList.add('active-log');
      (<HTMLInputElement>document.getElementById('darker')).classList.remove('inactiveDarker');
      (<HTMLInputElement>document.getElementById('darker')).classList.add('activeDarker');

    }else{
      (<HTMLInputElement>document.getElementById("condec")).innerHTML = "Connexion"
      this._connexion.setLogin("");
      this._favoris.resetFavorisListe();
    }
    
  }

}
