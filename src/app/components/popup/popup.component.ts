import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeWin(){
    (<HTMLInputElement>document.getElementById("popup")).classList.remove('active-pop');
    (<HTMLInputElement>document.getElementById("popup")).classList.add('inactive-pop');
  }

}
