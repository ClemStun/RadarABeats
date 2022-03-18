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
  }

  constructor() { }

  ngOnInit(): void {
  }

}
