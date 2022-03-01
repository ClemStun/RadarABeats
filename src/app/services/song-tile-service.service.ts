import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongTileServiceService {

  artiste: string = "NO ARTIST"
  titre: string = "NO SONG"
  count: number = 0
  ville: string = "NO CITY"
  coordonnees: string = "0, 0"

  constructor(private http:HttpClient) { }

  getRandomOffset(count: number){
    return Math.floor(Math.random() * count);
  }

  setCoord(lon: number, lat: number){
    this.coordonnees = lon + ", " + lat;
  }

  getNumberOfArtists(city: string): Promise<any>{


    console.log("Inside");
    return this.http.get<any>('http://musicbrainz.org/ws/2/artist/?query=area:\"'+ city +'\"&limit=1&fmt=json', {responseType: "json"}).toPromise();

  }

  getRandomArtists(city: string, count: number): Promise<any>{
    
    let offset = this.getRandomOffset(count);

    return this.http.get<any>('http://musicbrainz.org/ws/2/artist/?query=area:\"'+ city +'\"&limit=1&offset='+ offset +'&fmt=json', {responseType: "json"}).toPromise();
  }

  getNumberOfSongs(artist: string){
    return this.http.get<any>('http://musicbrainz.org/ws/2/recording/?query=artist:\"'+ artist +'\"&limit=1&fmt=json', {responseType: "json"}).toPromise();
  }

  getRandomSong(artist: string, count: number): Promise<any>{
    
    let offset = this.getRandomOffset(count);

    return this.http.get<any>('http://musicbrainz.org/ws/2/recording/?query=artist:\"'+ artist +'\"&limit=1&offset='+ offset +'&fmt=json', {responseType: "json"}).toPromise();
  }

  async setArtistAndSong(city: string, district: string, country: string) {
    console.log("Before");
      //TRY CITY
      await this.getNumberOfArtists(city).then(data => this.count = data["count"]);
      console.log(this.count);
      if(this.count == 0){

        //TRY DISTRICT
        await this.getNumberOfArtists(district).then(data => this.count = data["count"]);
        if(this.count == 0){

          //TRY COUNTRY
          await this.getNumberOfArtists(country).then(data => this.count = data["count"]);
          if(this.count == 0){


            this.artiste = "NO ARTIST";
            this.titre = "NO SONG";
          }else{
            await this.getRandomArtists(country, this.count).then(data => this.artiste = data["artists"][0]["name"]);
            this.ville = country;
            await this.getNumberOfSongs(this.artiste).then(data => this.count = data["count"]);
            if(this.count == 0){
              this.titre = "NO SONG";
            }else{
              await this.getRandomSong(this.artiste, this.count).then(data => this.titre = data["recordings"][0]["title"]);
            }
          }
        }else{
          await this.getRandomArtists(district, this.count).then(data => this.artiste = data["artists"][0]["name"]);
          this.ville = district;
          await this.getNumberOfSongs(this.artiste).then(data => this.count = data["count"]);
          if(this.count == 0){
            this.titre = "NO SONG";
          }else{
            await this.getRandomSong(this.artiste, this.count).then(data => this.titre = data["recordings"][0]["title"]);
          }
        }


      }else{
        await this.getRandomArtists(city, this.count).then(data => this.artiste = data["artists"][0]["name"]);
        console.log("Artist : " + this.artiste);
        this.ville = city;

        await this.getNumberOfSongs(this.artiste).then(data => this.count = data["count"]);
        console.log(this.count);
        if(this.count == 0){
          this.titre = "NO SONG";
        }else{
          await this.getRandomSong(this.artiste, this.count).then(data => this.titre = data["recordings"][0]["title"]);
        }
        console.log("Song : " + this.titre);
        console.log("After");
        
      }
      
  }

  getLinkFromArtistAndSong(artist: string, song: string){
    this.http.get<any>('https://www.googleapis.com/youtube/v3/search', {responseType: "json"}).toPromise();
    
  }


}
