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

  constructor() { }

  ngOnInit(): void {
  }

}
