import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * Permet de partagé l'utilisateur connecté entre les différent component et service
 */
export class ConnexionService {

  login: string;

  constructor() {
    this.login = "";
   }

  getLogin(): string{
    return this.login;
  }

  setLogin(login: string){
    this.login = login;
  }

}
