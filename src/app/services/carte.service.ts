import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'types-axios';

@Injectable({
  providedIn: 'root'
})

export class CarteService {


  constructor() { }

  /**
   * Récupère la ville, la region et le pays en latitude longitude 
   * 
   * @param lng longitude
   * @param lat latitude
   * @returns promise avec la ville, la region et le pays 
   */
  async getPlace(lng: number, lat: number): Promise<string[]>{

    let url: string;
    let place_name: string;
    let value: string[];

    url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + lng + "," + lat + ".json?types=place&access_token=" + environment.mapbox.token 

    value = [];

    await axios.get(url).then((res: any) => {

      place_name = res.data.features[0].place_name;
      value = place_name.split(", ");

    }).catch((e: any) => {
      console.log(e);
    });

    this.musicTileComp.showMenu();

    return value;


  }

  musicTileComp: any

  //Setter
  setComp(comp: any){
    this.musicTileComp = comp;
  }


}