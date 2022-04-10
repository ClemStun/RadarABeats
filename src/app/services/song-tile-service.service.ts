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
  description: string = "Cet artiste n'a pas de description !"

  /** Injection du service http pour les appels aux APIs
   * 
   */
  constructor(private http:HttpClient) { }

  /** Retourne une valeur aléatoire en fonction du nombre d'artistes ou de musiques trouvés
   * 
   */
  getRandomOffset(count: number){
    return Math.floor(Math.random() * count);
  }

  /** Modification des coordonnées affichées sur le site
   * 
   */
  setCoord(lon: number, lat: number){
    this.coordonnees = lon + ", " + lat;
  }


  /** Retourne une promise contenant le nombre d'artistes à un lieu donné
   * 
   * @param city Ville où chercher l'artiste
   * @returns Une promise contenant la réponse JSON avec le nombre d'artistes trouvés
   */
  getNumberOfArtists(city: string): Promise<any>{

    //Debug
    console.log("Inside");

    //endpoint : artist
    //query : ville
    //limit : 1
    //Uttilisation : recuperer le nombre d'artistes
    return this.http.get<any>('https://musicbrainz.org/ws/2/artist/?query=area:\"'+ city +'\"&limit=1&fmt=json', {responseType: "json"}).toPromise();

  }

  /** Retourne une promise contenant un artiste aléatoire à un lieu donné
   * 
   * @param city Ville d'où provient l'artiste
   * @param count Nombre d'artistes provenant de la ville
   * @returns Une promise contenant la réponse JSON avec l'artiste trouvé
   */
  getRandomArtists(city: string, count: number): Promise<any>{
    
    //Récuperation de l'offset aléatoire pour choisir un artiste au hasard
    let offset = this.getRandomOffset(count);


    //endpoint : artist
    //query : ville
    //limit : 1
    //offset : offset aléatoire
    //Uttilisation : récuperer un artiste au hasard
    return this.http.get<any>('https://musicbrainz.org/ws/2/artist/?query=area:\"'+ city +'\"&limit=1&offset='+ offset +'&fmt=json', {responseType: "json"}).toPromise();
  }


  /** Retourne une promise contenant le nombre de musiques pour un artiste donné
   * 
   * @param artist Artiste choisi
   * @returns Une promise contenant la réponse JSON avec le nombre de musiques trouvées
   */
  getNumberOfSongs(artist: string){

    //endpoint : recordings
    //query : artist
    //limit : 1
    //Uttilisation : récuperer le nombre de musiques d'un artiste
    return this.http.get<any>('https://musicbrainz.org/ws/2/recording/?query=artist:\"'+ artist +'\"&limit=1&fmt=json', {responseType: "json"}).toPromise();
  }


  /** Retourne une promise contenant une musique aléatoire pour un artiste donné
   * 
   * @param artist Artiste choisi
   * @param count Nombre de musiques d'un artiste
   * @returns Une promise contenant la réponse JSON avec la musique aléatoire
   */
  getRandomSong(artist: string, count: number): Promise<any>{
    
    //Récuperation de l'offset aléatoire pour choisir une musique au hasard
    let offset = this.getRandomOffset(count);

    //endpoint : recordings
    //query : artist
    //limit : 1
    //offset : offset aléatoire
    //Uttilisation : récuperer une musique d'un artiste
    return this.http.get<any>('https://musicbrainz.org/ws/2/recording/?query=artist:\"'+ artist +'\"&limit=1&offset='+ offset +'&fmt=json', {responseType: "json"}).toPromise();
  }


  /** Fonction principale qui extrait les données des promises
   * 
   * @param city Ville choisie
   * @param district Region où est située la ville
   * @param country Pays où est située la ville
   */
  async setArtistAndSong(city: string, district: string, country: string) {

    //Debug
    console.log("Before");

    //Essai de récupération d'un artiste dans la ville donnée
    await this.getNumberOfArtists(city).then(data => this.count = data["count"]);

    //Pas d'artistes dans la ville
    if(this.count == 0){

      //Essai de récupération d'un artiste dans la région
      await this.getNumberOfArtists(district).then(data => this.count = data["count"]);

      //Pas d'artistes dans la region
      if(this.count == 0){

        //Essai de récupération d'un artiste dans le pays
        await this.getNumberOfArtists(country).then(data => this.count = data["count"]);

        //Pas d'artistes dans le pays
        if(this.count == 0){

          this.artiste = "NO ARTIST";
          this.titre = "NO SONG";

        }else{

          //Recherche d'artistes dans le pays
          await this.getRandomArtists(country, this.count).then(data => {
            this.artiste = data["artists"][0]["name"];
            this.artisteID = data["artists"][0]["id"];
            this.description = data["artists"][0]["disambiguation"] == null ? "Cet artiste n'a pas de description !" : data["artists"][0]["disambiguation"];
          });
          this.ville = country;

          //Récupération du nombre de musiques de l'artiste
          await this.getNumberOfSongs(this.artiste).then(data => this.count = data["count"]);

          //Pas de musiques trouvées
          if(this.count == 0){
            this.titre = "NO SONG";
          }else{

            //Récupération d'une musique de l'artiste
            await this.getRandomSong(this.artiste, this.count).then(data => this.titre = data["recordings"][0]["title"]);
          }
        }
      }else{

        //Recherche d'artistes dans la region
        await this.getRandomArtists(district, this.count).then(data => {
          this.artiste = data["artists"][0]["name"];
          this.artisteID = data["artists"][0]["id"];
          this.description = data["artists"][0]["disambiguation"] == null ? "Cet arstiste n'a pas de description !" : data["artists"][0]["disambiguation"];
        });
        this.ville = district;

        //Récupération du nombre de musiques de l'artiste
        await this.getNumberOfSongs(this.artiste).then(data => this.count = data["count"]);

        //Pas de musiques trouvées
        if(this.count == 0){
          this.titre = "NO SONG";
        }else{

          //Récupération d'une musique de l'artiste
          await this.getRandomSong(this.artiste, this.count).then(data => this.titre = data["recordings"][0]["title"]);
        }
      }
    }else{

      //Recherche d'un artiste dans la ville
      await this.getRandomArtists(city, this.count).then(data => {
        this.artiste = data["artists"][0]["name"];
        this.artisteID = data["artists"][0]["id"];
        this.description = data["artists"][0]["disambiguation"] == null ? "Cet arstiste n'a pas de description !" : data["artists"][0]["disambiguation"];
      });
      console.log("Artist : " + this.artiste);
      this.ville = city;

      //Récupération du nombre de musiques de l'artiste
      await this.getNumberOfSongs(this.artiste).then(data => this.count = data["count"]);
      console.log(this.count);
      if(this.count == 0){
        this.titre = "NO SONG";
      }else{

        //Récupération d'une musique de l'artiste
        await this.getRandomSong(this.artiste, this.count).then(data => this.titre = data["recordings"][0]["title"]);
      }

      //Debug
      console.log("Song : " + this.titre);
      console.log("After");
      
    }
      
  }


  /** Affichage de la vidéo correspondante à la musique
   * 
   */
  async setVideoLink(){
    //Récupération du lien de la musique
    await this.getLinkFromArtistAndSong(this.artiste, this.titre);

    //Création du lien pour l'embed YouTube
    this.videoLink = 'https://www.youtube.com/embed/' + this.videoId + "?&autoplay=1";
  }


  /** Récupération de la vidéo correspondante à la musique trouvée 
   * 
   * @param artist
   * @param song 
   */
  async getLinkFromArtistAndSong(artist: string, song: string){

    //endpoint : YouTube search
    //query : artist + song
    //type : video
    //part : snipper
    //key : YouTube token
    //Utilisation : rechercher la musique d'un artiste sur YouTube
    await this.http.get<any>('https://www.googleapis.com/youtube/v3/search/?q="' + artist + ' ' + song + '"&type=video&part=snippet&key=' + environment.youtube.token, {responseType: "json"}).toPromise().then(data => {
      this.videoId = data["items"][0]["id"]["videoId"];
    });
  }


}
