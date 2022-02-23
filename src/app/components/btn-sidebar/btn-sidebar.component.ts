import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-sidebar',
  templateUrl: './btn-sidebar.component.html',
  styleUrls: ['./btn-sidebar.component.scss']
})
export class BtnSidebarComponent implements OnInit {

  showSide(){
    console.log("Test ShowSide");
    (<HTMLInputElement>document.getElementById('sidebar')).classList.remove('inactive');
    (<HTMLInputElement>document.getElementById('sidebar')).classList.add('active');
    (<HTMLInputElement>document.getElementById('darker')).classList.remove('inactiveDarker');
    (<HTMLInputElement>document.getElementById('darker')).classList.add('activeDarker');
    (<HTMLInputElement>document.getElementById('trigger-btn-pre')).classList.add('invisible');
    (<HTMLInputElement>document.getElementById('close-btn-side')).classList.remove('invisible');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
