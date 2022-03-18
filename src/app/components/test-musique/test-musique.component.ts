import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CarteService } from 'src/app/services/carte.service';
import { SongTileServiceService } from 'src/app/services/song-tile-service.service';

@Component({
  selector: 'app-test-musique',
  templateUrl: './test-musique.component.html',
  styleUrls: ['./test-musique.component.scss']
})

export class TestMusiqueComponent implements OnInit {
  
  constructor(public songTileService: SongTileServiceService, private carteService: CarteService){ 
    
  }

  //Fonction d'affichage de la version reduite du menu vertical
  showMenu(){
    console.log("Test ShowMenu");

    if((<HTMLInputElement>document.getElementById('menuUp')).classList.contains('greater')){
      this.lowerMenu();
    }

    (<HTMLInputElement>document.getElementById('menuUp')).classList.remove('inactive');
    (<HTMLInputElement>document.getElementById('menuUp')).classList.add('active');
    (<HTMLInputElement>document.getElementById('trigger-btn')).classList.add('invisible');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.remove('invisible');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('invisible');

    setTimeout(() => {
      (<HTMLInputElement>document.getElementById('close-btn')).classList.remove('close-btn-inactive');
      (<HTMLInputElement>document.getElementById('close-btn')).classList.add('close-btn-active');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-inactive');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-active');
    }, 30);
  }

  hideMenu(){
    console.log("Test HideMenu");
    (<HTMLInputElement>document.getElementById('menuUp')).scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    (<HTMLInputElement>document.getElementById('menuUp')).classList.remove('active');
    (<HTMLInputElement>document.getElementById('menuUp')).classList.add('inactive');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.add('invisible');
    (<HTMLInputElement>document.getElementById('trigger-btn')).classList.remove('invisible');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('invisible');

    if((<HTMLInputElement>document.getElementById('menuUp')).classList.contains('greater')){
      (<HTMLInputElement>document.getElementById('menuUp')).classList.remove('greater');
      this.lowerMenu();
    }

    setTimeout(() => {
      (<HTMLInputElement>document.getElementById('close-btn')).classList.remove('close-btn-active');
      (<HTMLInputElement>document.getElementById('close-btn')).classList.add('close-btn-inactive');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-active');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-inactive');
      
    }, 30);
  }

  //Fonction d'affichage de la version complète du menu vertical
  greaterMenu(){
    (<HTMLInputElement>document.getElementById('menuUp')).classList.add('greater');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.remove('close-btn-active');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.add('close-btn-greater');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-img-inactive');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-img-active');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.remove('greater-btn-img-inactive');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.add('greater-btn-img-active');

    (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-active');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-greater');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.remove('greater-btn-active');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.add('greater-btn-greater');
    
    setTimeout(() => {
      (<HTMLInputElement>document.getElementById('lower-btn')).classList.remove('invisible');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('invisible');
    }, 300);
  }

  //Fonction de passage entre la version reduite du menu et la version complète
  lowerMenu(){
    (<HTMLInputElement>document.getElementById('menuUp')).classList.remove('greater');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.remove('close-btn-greater');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.add('close-btn-active');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-img-active');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-img-inactive');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.remove('greater-btn-img-active');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.add('greater-btn-img-inactive');

    (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-greater');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-active');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.remove('greater-btn-greater');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.add('greater-btn-active');

    setTimeout(() => {
      (<HTMLInputElement>document.getElementById('lower-btn')).classList.add('invisible');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('invisible');
     }, 300);
  }


  ngOnInit(): void {

    //Passe le composant au service de la carte pour l'affichage du menu apres un clique sur la carte
    this.carteService.setComp(this);

  }

}
