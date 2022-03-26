import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  login: string = "";

  constructor() { }

  getLogin(): string{
    return this.login;
  }

  setLogin(login: string){
    this.login = login;
  }

}
