import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss']
})
export class AProposComponent implements OnInit {

  hideAPropos(){
    console.log("Test HideAPropos");
    (<HTMLInputElement>document.getElementById('apropos')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('apropos')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-apropos')).classList.remove('text-selected');
  }

  hideAProposMobile(){
    console.log("Test HideAProposMobile");
    (<HTMLInputElement>document.getElementById('apropos')).classList.remove('active-categorie');
    (<HTMLInputElement>document.getElementById('apropos')).classList.add('inactive-categorie');
    (<HTMLInputElement>document.getElementById('btn-apropos')).classList.remove('text-selected');
    (<HTMLInputElement>document.getElementById('sidebar')).classList.remove('inactive');
    (<HTMLInputElement>document.getElementById('sidebar')).classList.add('active');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
