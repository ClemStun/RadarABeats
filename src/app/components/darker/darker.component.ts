import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darker',
  templateUrl: './darker.component.html',
  styleUrls: ['./darker.component.scss']
})
export class DarkerComponent implements OnInit {

  hideSide(){
    console.log("Test HideSide");
    (<HTMLInputElement>document.getElementById('sidebar')).classList.remove('active');
    (<HTMLInputElement>document.getElementById('sidebar')).classList.add('inactive');
    (<HTMLInputElement>document.getElementById('darker')).classList.remove('activeDarker');
    (<HTMLInputElement>document.getElementById('darker')).classList.add('inactiveDarker');
    //(<HTMLInputElement>document.getElementById('close-btn-side')).classList.add('invisible');
    (<HTMLInputElement>document.getElementById('trigger-btn-pre')).classList.remove('invisible');

    (<HTMLInputElement>document.getElementById('log-window')).classList.remove('active-log');
    (<HTMLInputElement>document.getElementById('log-window')).classList.add('unactive-log');

    (<HTMLInputElement>document.getElementById('pop-up')).classList.remove('active-popup');
    (<HTMLInputElement>document.getElementById('pop-up')).classList.add('inactive-popup');

    (<HTMLInputElement>document.getElementById('error-ins')).classList.remove('active-err');
    (<HTMLInputElement>document.getElementById('error-ins')).classList.add('inactive-err');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
