import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  showPopup(){
    console.log("Test Popup");
    (<HTMLInputElement>document.getElementById('pop-up')).classList.remove('inactive');
    (<HTMLInputElement>document.getElementById('pop-up')).classList.add('active');
    (<HTMLInputElement>document.getElementById('darker')).classList.remove('inactiveDarker');
    (<HTMLInputElement>document.getElementById('darker')).classList.add('activeDarker');
    (<HTMLInputElement>document.getElementById('trigger-btn-pre')).classList.add('invisible');
    (<HTMLInputElement>document.getElementById('close-btn-side')).classList.remove('invisible');
  }

  hidePopup(){
    console.log("Test HidePopup");
    (<HTMLInputElement>document.getElementById('pop-up')).classList.remove('active');
    (<HTMLInputElement>document.getElementById('pop-up')).classList.add('inactive');
    (<HTMLInputElement>document.getElementById('darker')).classList.remove('activeDarker');
    (<HTMLInputElement>document.getElementById('darker')).classList.add('inactiveDarker');
    (<HTMLInputElement>document.getElementById('close-btn-side')).classList.add('invisible');
    (<HTMLInputElement>document.getElementById('trigger-btn-pre')).classList.remove('invisible');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
