import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.scss']
})

export class ArtisteComponent implements OnInit {

  constructor() 
  {}

  ngOnInit(): void {   
  }

}

export class Artiste{

  private nom: string;
  private description: string;

  constructor(nom:string,desc:string){
      this.nom = nom;
      this.description = desc;
    }

  getNom():string{
    return this.nom;
  }

  getDesc():string{
    return this.description;
  }
}

