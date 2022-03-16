import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacter',
  templateUrl: './contacter.component.html',
  styleUrls: ['./contacter.component.scss']
})
export class ContacterComponent implements OnInit {

  hideContacter(){
    console.log("Test HideContacter");
    (<HTMLInputElement>document.getElementById('contacter')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('contacter')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-contacter')).classList.remove('text-selected');
  }

  hideContacterMobile(){
    console.log("Test HideContacterMobile");
    (<HTMLInputElement>document.getElementById('contacter')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('contacter')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-contacter')).classList.remove('text-selected');    
    (<HTMLInputElement>document.getElementById('sidebar')).classList.remove('inactive');
    (<HTMLInputElement>document.getElementById('sidebar')).classList.add('active');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
