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

  /** Injection du service http pour les appelles aux API
   * 
   */
  constructor(private http:HttpClient) { }

  /** Retourne une valeur aléatoire en fonction du nombre d'artiste ou de musiques trouvées
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


  /** Retourne une promise contenant le nombre d'artiste à un lieu donné
   * 
   * @param city Ville où chercher l'artiste
   * @returns Une promise contenant la réponse json avec le nombres d'artistes trouvés
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
   * @param count Nombre d'artistes provenent de la ville
   * @returns Une promise contenant la réponse json avec l'artiste trouvés
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


  /** Retourne une promise contenant le nombre de musique pour un artiste donné
   * 
   * @param artist Artiste choisi
   * @returns Une promise contenant la réponse json avec le nombres de musiques trouvées
   */
  getNumberOfSongs(artist: string){

    //endpoint : recordings
    //query : artist
    //limit : 1
    //Uttilisation : récuperer le nombres de musiques d'un artiste
    return this.http.get<any>('https://musicbrainz.org/ws/2/recording/?query=artist:\"'+ artist +'\"&limit=1&fmt=json', {responseType: "json"}).toPromise();
  }


  /** Retourne une promise contenant une musique aléatoire pour un artiste donné
   * 
   * @param artist Artist choisi
   * @param count Nombre de musiques d'un artiste
   * @returns Une promise contenant la réponse json avec la musique aléatoire
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
   * @param district Region où est situé la ville
   * @param country Pays où est situé la ville
   */
  async setArtistAndSong(city: string, district: string, country: string) {

    //Debug
    console.log("Before");

    //Essai de récuparation d'un artiste dans la ville donnée
    await this.getNumberOfArtists(city).then(data => this.count = data["count"]);

    //Pas d'artiste dans la ville
    if(this.count == 0){

      //Essai de récuperation d'un artiste dans la region
      await this.getNumberOfArtists(district).then(data => this.count = data["count"]);

      //Pas d'artiste dans la region
      if(this.count == 0){

        //Essai de récuperation d'un artiste dans le pays
        await this.getNumberOfArtists(country).then(data => this.count = data["count"]);

        //Pas d'artiste dans le pays
        if(this.count == 0){

          this.artiste = "NO ARTIST";
          this.titre = "NO SONG";

        }else{

          //Recherche d'artiste dans le pays
          await this.getRandomArtists(country, this.count).then(data => {
            this.artiste = data["artists"][0]["name"];
            this.artisteID = data["artists"][0]["id"];
            this.description = data["artists"][0]["disambiguation"] == null ? "Cet artiste n'a pas de description !" : data["artists"][0]["disambiguation"];
          });
          this.ville = country;

          //Récuperation du nombre de musiques de l'artiste
          await this.getNumberOfSongs(this.artiste).then(data => this.count = data["count"]);

          //Pas de musique trouvée
          if(this.count == 0){
            this.titre = "NO SONG";
          }else{

            //Récuperation d'une musique de l'artiste
            await this.getRandomSong(this.artiste, this.count).then(data => this.titre = data["recordings"][0]["title"]);
          }
        }
      }else{

        //Recherche d'artiste dans la region
        await this.getRandomArtists(district, this.count).then(data => {
          this.artiste = data["artists"][0]["name"];
          this.artisteID = data["artists"][0]["id"];
          this.description = data["artists"][0]["disambiguation"] == null ? "Cet arstiste n'a pas de description !" : data["artists"][0]["disambiguation"];
        });
        this.ville = district;

        //Récuperation du nombre de musiques de l'artiste
        await this.getNumberOfSongs(this.artiste).then(data => this.count = data["count"]);

        //Pas de musique trouvée
        if(this.count == 0){
          this.titre = "NO SONG";
        }else{

          //Récuperation d'une musique de l'artiste
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

      //Récuperation du nombre de musiques de l'artiste
      await this.getNumberOfSongs(this.artiste).then(data => this.count = data["count"]);
      console.log(this.count);
      if(this.count == 0){
        this.titre = "NO SONG";
      }else{

        //Récuperation d'une musique de l'artiste
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
    //Récuperation du lien de la musique
    await this.getLinkFromArtistAndSong(this.artiste, this.titre);

    //Création du lien pour l'embed youtube
    this.videoLink = 'https://www.youtube.com/embed/' + this.videoId + "?&autoplay=1";
  }


  /** Récuperation de la vidéo correspondante à la musique trouvée 
   * 
   * @param artist
   * @param song 
   */
  async getLinkFromArtistAndSong(artist: string, song: string){

    //endpoint : youtube search
    //query : artist + song
    //type : video
    //part : snipper
    //key : youtube token
    //Uttilisation : rechercher la musique d'un artiste sur youtube
    await this.http.get<any>('https://www.googleapis.com/youtube/v3/search/?q="' + artist + ' ' + song + '"&type=video&part=snippet&key=' + environment.youtube.token, {responseType: "json"}).toPromise().then(data => {
      this.videoId = data["items"][0]["id"]["videoId"];
    });
  }


}