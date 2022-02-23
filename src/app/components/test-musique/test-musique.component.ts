import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Artiste } from '../artiste/artiste.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-test-musique',
  templateUrl: './test-musique.component.html',
  styleUrls: ['./test-musique.component.scss']
})

export class TestMusiqueComponent implements OnInit {

  showMenu(){
    console.log("Test ShowMenu");
    (<HTMLInputElement>document.getElementById('menuUp')).classList.remove('inactive');
    (<HTMLInputElement>document.getElementById('menuUp')).classList.add('active');
    (<HTMLInputElement>document.getElementById('trigger-btn')).classList.add('invisible');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.remove('invisible');
  }

  hideMenu(){
    console.log("Test HideMenu");
    (<HTMLInputElement>document.getElementById('menuUp')).classList.remove('active');
    (<HTMLInputElement>document.getElementById('menuUp')).classList.add('inactive');
    (<HTMLInputElement>document.getElementById('close-btn')).classList.add('invisible');
    (<HTMLInputElement>document.getElementById('trigger-btn')).classList.remove('invisible');
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

    this.titre = "Hypertrophia";

    this.artiste = "Ronteah";

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
