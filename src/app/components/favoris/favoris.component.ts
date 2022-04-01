import { Component, OnInit } from '@angular/core'
import { ConnexionService } from 'src/app/services/connexion.service';
import { FavorisService } from 'src/app/services/favoris.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})

export class FavorisComponent implements OnInit {

  constructor(public _favoris: FavorisService, public _connexion: ConnexionService) { }

  ngOnInit(): void { }

  hideFavoris(){
    (<HTMLInputElement>document.getElementById('favoris')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('favoris')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-apropos')).classList.remove('text-selected');
  }

  hideFavorisMobile(){
    (<HTMLInputElement>document.getElementById('favoris')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('favoris')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-favoris')).classList.remove('text-selected');
    (<HTMLInputElement>document.getElementById('sidebar')).classList.remove('inactive');
    (<HTMLInputElement>document.getElementById('sidebar')).classList.add('active');
  }
  
}
