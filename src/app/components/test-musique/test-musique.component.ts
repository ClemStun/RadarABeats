import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Artiste } from '../artiste/artiste.component';
import { DOCUMENT } from '@angular/common';
import { CarteService } from 'src/app/services/carte.service';
import { SongTileServiceService } from 'src/app/services/song-tile-service.service';

@Component({
  selector: 'app-test-musique',
  templateUrl: './test-musique.component.html',
  styleUrls: ['./test-musique.component.scss']
})

export class TestMusiqueComponent implements OnInit {
  
  constructor(public songTileService: SongTileServiceService, private carteService: CarteService){ 
    
  }

  showMenu(){
    console.log("Test ShowMenu");

    if((<HTMLInputElement>document.getElementById('menuUp')).classList.contains('greater')){
      this.lowerMenu();
    }

    (<HTMLInputElement>document.getElementById('menuUp')).classList.remove('inactive');
    (<HTMLInputElement>document.getElementById('menuUp')).classList.add('active');
    (<HTMLInputElement>document.getElementById('trigger-btn')).classList.add('invisible');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.remove('invisible');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('invisible');

    setTimeout(() => {
      (<HTMLInputElement>document.getElementById('close-btn')).classList.remove('close-btn-inactive');
      (<HTMLInputElement>document.getElementById('close-btn')).classList.add('close-btn-active');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-inactive');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-active');
    }, 30);
  }

  hideMenu(){
    console.log("Test HideMenu");
    (<HTMLInputElement>document.getElementById('menuUp')).scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    (<HTMLInputElement>document.getElementById('menuUp')).classList.remove('active');
    (<HTMLInputElement>document.getElementById('menuUp')).classList.add('inactive');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.add('invisible');
    (<HTMLInputElement>document.getElementById('trigger-btn')).classList.remove('invisible');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('invisible');

    if((<HTMLInputElement>document.getElementById('menuUp')).classList.contains('greater')){
      (<HTMLInputElement>document.getElementById('menuUp')).classList.remove('greater');
      this.lowerMenu();
    }

    setTimeout(() => {
      (<HTMLInputElement>document.getElementById('close-btn')).classList.remove('close-btn-active');
      (<HTMLInputElement>document.getElementById('close-btn')).classList.add('close-btn-inactive');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-active');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-inactive');
      
    }, 30);
  }

  greaterMenu(){
    (<HTMLInputElement>document.getElementById('menuUp')).classList.add('greater');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.remove('close-btn-active');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.add('close-btn-greater');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-img-inactive');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-img-active');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.remove('greater-btn-img-inactive');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.add('greater-btn-img-active');

    (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-active');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-greater');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.remove('greater-btn-active');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.add('greater-btn-greater');
    
    setTimeout(() => {
      (<HTMLInputElement>document.getElementById('lower-btn')).classList.remove('invisible');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('invisible');
    }, 300);
  }

  lowerMenu(){
    (<HTMLInputElement>document.getElementById('menuUp')).classList.remove('greater');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.remove('close-btn-greater');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.add('close-btn-active');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-img-active');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-img-inactive');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.remove('greater-btn-img-active');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.add('greater-btn-img-inactive');

    (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('greater-btn-greater');
    (<HTMLInputElement>document.getElementById('greater-btn')).classList.add('greater-btn-active');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.remove('greater-btn-greater');
    (<HTMLInputElement>document.getElementById('lower-btn')).classList.add('greater-btn-active');

    setTimeout(() => {
      (<HTMLInputElement>document.getElementById('lower-btn')).classList.add('invisible');
      (<HTMLInputElement>document.getElementById('greater-btn')).classList.remove('invisible');
     }, 300);
  }

  titre!: string;

  //artiste:Artiste;
  artiste!:string;

  artisteTwitter!: string;
  artisteInstagram!: string;
  artisteSoundcloud!: string;
  artisteFacebook!: string;
  artisteDeezer!: string;
  artisteSpotify!: string;
  artisteWebsite!: string;

  artisteDescription!: string;

  ville!: string;
  coordonnees!: string;


  //constructor(artiste:Artiste){
    //this.artiste = artiste;
  //}

  ngOnInit(): void {


    this.carteService.setComp(this);

    this.titre = "NO SONG";

    this.artiste = "NO ARTIST";
    
    this.artisteTwitter = "https://www.twitter.com/ronteahri"
    this.artisteInstagram = "https://www.instagram.com/ronteahri"
    this.artisteSoundcloud = "https://www.soundcloud.com/ronteah-rth"
    this.artisteFacebook = "https://www.facebook.com"
    this.artisteDeezer = "https://www.deezer.com"
    this.artisteSpotify = "https://www.spotify.com"
    this.artisteWebsite = "https://www.utema.fr/portfolio/louis"

    this.artisteDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis pharetra risus. Aliquam ornare suscipit sem ac mollis. Phasellus fermentum lobortis mi non mattis. Praesent odio tellus, lacinia quis volutpat ac, hendrerit vitae velit. Vestibulum vestibulum maximus lorem sit amet aliquam. Sed pharetra, purus id accumsan vehicula, ipsum lorem rhoncus nibh, et ultrices nulla leo id neque. Nam ac luctus sem, eu viverra nisi. Nulla porttitor dui at libero molestie facilisis. Cras a tellus augue. Pellentesque tincidunt consequat congue. Maecenas et porttitor eros. Nam sed tellus nibh. Nullam placerat eu sem vitae pellentesque. Phasellus efficitur, urna ac posuere fringilla, turpis justo suscipit erat, in pharetra dui ante a lorem. Morbi porta orci blandit massa malesuada, vitae imperdiet dui vulputate. Sed dignissim, risus quis consectetur pellentesque, nisi quam lobortis eros, in porttitor odio quam nec libero. Vivamus finibus, elit eget tempor laoreet, purus dolor mattis mi, ut dignissim mi mauris et risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis pharetra risus. Aliquam ornare suscipit sem ac mollis. Phasellus fermentum lobortis mi non mattis. Praesent odio tellus, lacinia quis volutpat ac, hendrerit vitae velit. Vestibulum vestibulum maximus lorem sit amet aliquam. Sed pharetra, purus id accumsan vehicula, ipsum lorem rhoncus nibh, et ultrices nulla leo id neque. Nam ac luctus sem, eu viverra nisi. Nulla porttitor dui at libero molestie facilisis. Cras a tellus augue. Pellentesque tincidunt consequat congue. Maecenas et porttitor eros. Nam sed tellus nibh. Nullam placerat eu sem vitae pellentesque. Phasellus efficitur, urna ac posuere fringilla, turpis justo suscipit erat, in pharetra dui ante a lorem. Morbi porta orci blandit massa malesuada, vitae imperdiet dui vulputate. Sed dignissim, risus quis consectetur pellentesque, nisi quam lobortis eros, in porttitor odio quam nec libero. Vivamus finibus, elit eget tempor laoreet, purus dolor mattis mi, ut dignissim mi mauris et risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis pharetra risus. Aliquam ornare suscipit sem ac mollis. Phasellus fermentum lobortis mi non mattis. Praesent odio tellus, lacinia quis volutpat ac, hendrerit vitae velit. Vestibulum vestibulum maximus lorem sit amet aliquam. Sed pharetra, purus id accumsan vehicula, ipsum lorem rhoncus nibh, et ultrices nulla leo id neque. Nam ac luctus sem, eu viverra nisi. Nulla porttitor dui at libero molestie facilisis. Cras a tellus augue. Pellentesque tincidunt consequat congue. Maecenas et porttitor eros. Nam sed tellus nibh. Nullam placerat eu sem vitae pellentesque. Phasellus efficitur, urna ac posuere fringilla, turpis justo suscipit erat, in pharetra dui ante a lorem. Morbi porta orci blandit massa malesuada, vitae imperdiet dui vulputate. Sed dignissim, risus quis consectetur pellentesque, nisi quam lobortis eros, in porttitor odio quam nec libero. Vivamus finibus, elit eget tempor laoreet, purus dolor mattis mi, ut dignissim mi mauris et risus."
  
    this.ville = "Le Mans";
    this.coordonnees = "48.00679639723815, 0.19642185178061575";
  }

}
