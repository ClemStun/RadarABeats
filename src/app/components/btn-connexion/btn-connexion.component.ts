import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-connexion',
  templateUrl: './btn-connexion.component.html',
  styleUrls: ['./btn-connexion.component.scss']
})
export class BtnConnexionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  connexionMenu(): any{

    (<HTMLInputElement>document.getElementById('log-window')).classList.remove('unactive-log');
    (<HTMLInputElement>document.getElementById('log-window')).classList.add('active-log');
    (<HTMLInputElement>document.getElementById('darker')).classList.remove('inactiveDarker');
    (<HTMLInputElement>document.getElementById('darker')).classList.add('activeDarker');
    
  }

}
