import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  hideSide(){
    console.log("Test HideSide");
    (<HTMLInputElement>document.getElementById('sidebar')).classList.remove('active');
    (<HTMLInputElement>document.getElementById('sidebar')).classList.add('inactive');
    (<HTMLInputElement>document.getElementById('darker')).classList.remove('activeDarker');
    (<HTMLInputElement>document.getElementById('darker')).classList.add('inactiveDarker');
    (<HTMLInputElement>document.getElementById('close-btn-side')).classList.add('invisible');
    (<HTMLInputElement>document.getElementById('trigger-btn-pre')).classList.remove('invisible');
  }

  showContacter(){

    (<HTMLInputElement>document.getElementById('apropos')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('apropos')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-apropos')).classList.remove('text-selected');
    
    (<HTMLInputElement>document.getElementById('favoris')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('favoris')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-favoris')).classList.remove('text-selected');

    (<HTMLInputElement>document.getElementById('contacter')).classList.remove('inactive-categorie');
    (<HTMLInputElement>document.getElementById('contacter')).classList.add('active-categorie');
    (<HTMLInputElement>document.getElementById('btn-contacter')).classList.add('text-selected');

  }

  showContacterMobile(){

    this.showContacter();

    (<HTMLInputElement>document.getElementById('sidebar')).classList.remove('active');
    (<HTMLInputElement>document.getElementById('sidebar')).classList.add('inactive');

  }



  showAPropos(){

    (<HTMLInputElement>document.getElementById('contacter')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('contacter')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-contacter')).classList.remove('text-selected');

    (<HTMLInputElement>document.getElementById('favoris')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('favoris')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-favoris')).classList.remove('text-selected');

    (<HTMLInputElement>document.getElementById('apropos')).classList.remove('inactive-categorie');
    (<HTMLInputElement>document.getElementById('apropos')).classList.add('active-categorie');
    (<HTMLInputElement>document.getElementById('btn-apropos')).classList.add('text-selected');

  }

  showAProposMobile(){
    
    this.showAPropos();
    
    (<HTMLInputElement>document.getElementById('sidebar')).classList.remove('active');
    (<HTMLInputElement>document.getElementById('sidebar')).classList.add('inactive');

  }

  showFavoris(){

    (<HTMLInputElement>document.getElementById('contacter')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('contacter')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-contacter')).classList.remove('text-selected');

    (<HTMLInputElement>document.getElementById('apropos')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('apropos')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-apropos')).classList.remove('text-selected');

    (<HTMLInputElement>document.getElementById('favoris')).classList.remove('inactive-categorie');
    (<HTMLInputElement>document.getElementById('favoris')).classList.add('active-categorie');
    (<HTMLInputElement>document.getElementById('btn-favoris')).classList.add('text-selected');
    
  }

  showFavorisMobile(){

    this.showFavoris();

    (<HTMLInputElement>document.getElementById('sidebar')).classList.remove('active');
    (<HTMLInputElement>document.getElementById('sidebar')).classList.add('inactive');

  }

  constructor() { }

  ngOnInit(): void {
  }

}
