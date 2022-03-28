import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SongTileServiceService {

  artiste: string = "NO ARTIST"
  titre: string = "NO SONG"
  count: number = 0
  ville: string = "NO CITY"
  coordonnees: string = "0, 0"
  videoLink: string =  ""
  videoId: string = "";
  artisteID: string = ""
  description: string = "Cet arstiste n'a pas de description !"

  //Injection du service http pour les appelles aux API
  constructor(private http:HttpClient) { }

  //Retourne une valeur aléatoire en fonction du nombre d'artiste ou de musiques trouvées
  getRandomOffset(count: number){
    return Math.floor(Math.random() * count);
  }

  setCoord(lon: number, lat: number){
    this.coordonnees = lon + ", " + lat;
  }

  //Retourne une promise contenant le nombre d'artiste à un lieu donné
  getNumberOfArtists(city: string): Promise<any>{


    console.log("Inside");
    return this.http.get<any>('https://musicbrainz.org/ws/2/artist/?query=area:\"'+ city +'\"&limit=1&fmt=json', {responseType: "json"}).toPromise();

  }

  //Retourne une promise contenant un artiste aléatoire à un lieu donné
  getRandomArtists(city: string, count: number): Promise<any>{
    
    let offset = this.getRandomOffset(count);

    return this.http.get<any>('https://musicbrainz.org/ws/2/artist/?query=area:\"'+ city +'\"&limit=1&offset='+ offset +'&fmt=json', {responseType: "json"}).toPromise();
  }


  //Retourne une promise contenant le nombre de musique pour un artiste donné
  getNumberOfSongs(artist: string){
    return this.http.get<any>('https://musicbrainz.org/ws/2/recording/?query=artist:\"'+ artist +'\"&limit=1&fmt=json', {responseType: "json"}).toPromise();
  }


  //Retourne une promise contenant une musique aléatoire pour un artiste donné
  getRandomSong(artist: string, count: number): Promise<any>{
    
    let offset = this.getRandomOffset(count);

    return this.http.get<any>('https://musicbrainz.org/ws/2/recording/?query=artist:\"'+ artist +'\"&limit=1&offset='+ offset +'&fmt=json', {responseType: "json"}).toPromise();
  }

  //Fonction principale qui extrait les données des promises
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
            await this.getRandomArtists(country, this.count).then(data => {
              this.artiste = data["artists"][0]["name"];
              this.artisteID = data["artists"][0]["id"];
              this.description = data["artists"][0]["disambiguation"] == null ? "Cet artiste n'a pas de description !" : data["artists"][0]["disambiguation"];
            });
            this.ville = country;
            await this.getNumberOfSongs(this.artiste).then(data => this.count = data["count"]);
            if(this.count == 0){
              this.titre = "NO SONG";
            }else{
              await this.getRandomSong(this.artiste, this.count).then(data => this.titre = data["recordings"][0]["title"]);
            }
          }
        }else{
          await this.getRandomArtists(district, this.count).then(data => {
            this.artiste = data["artists"][0]["name"];
            this.artisteID = data["artists"][0]["id"];
            this.description = data["artists"][0]["disambiguation"] == null ? "Cet arstiste n'a pas de description !" : data["artists"][0]["disambiguation"];
          });
          this.ville = district;
          await this.getNumberOfSongs(this.artiste).then(data => this.count = data["count"]);
          if(this.count == 0){
            this.titre = "NO SONG";
          }else{
            await this.getRandomSong(this.artiste, this.count).then(data => this.titre = data["recordings"][0]["title"]);
          }
        }


      }else{
        await this.getRandomArtists(city, this.count).then(data => {
          this.artiste = data["artists"][0]["name"];
          this.artisteID = data["artists"][0]["id"];
          this.description = data["artists"][0]["disambiguation"] == null ? "Cet arstiste n'a pas de description !" : data["artists"][0]["disambiguation"];
        });
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

  //Affichage de la vidéo correspondante à la musique
  async setVideoLink(){
    await this.getLinkFromArtistAndSong(this.artiste, this.titre);
    this.videoLink = 'https://www.youtube.com/embed/' + this.videoId + "?&autoplay=1";
  }


  //Récuperation de la vidéo correspondante à la musique trouvée 
  async getLinkFromArtistAndSong(artist: string, song: string){
    await this.http.get<any>('https://www.googleapis.com/youtube/v3/search/?q="' + artist + ' ' + song + '"&type=video&part=snippet&key=' + environment.youtube.token, {responseType: "json"}).toPromise().then(data => {
      this.videoId = data["items"][0]["id"]["videoId"];
    });
  }


}