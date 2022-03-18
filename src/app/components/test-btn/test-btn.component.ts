import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-btn',
  templateUrl: './test-btn.component.html',
  styleUrls: ['./test-btn.component.scss']
})
export class TestBtnComponent implements OnInit {

  lien: string = "https://utema.fr";
  texte: string = "You're going to Brazil !!";

  ngOnInit(): void {
  }

}
