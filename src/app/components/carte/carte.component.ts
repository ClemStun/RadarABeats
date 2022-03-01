import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { CarteService } from 'src/app/services/carte.service';
import { TestMusiqueComponent } from '../test-musique/test-musique.component';
import { SongTileServiceService } from 'src/app/services/song-tile-service.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  map!: mapboxgl.Map;

  constructor(private service: CarteService, private songTileService: SongTileServiceService) { }

  ngOnInit(): void {
    

    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.token,
      container: "carte", // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [0.1988608, 48.0076426], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    let oldMarker = new mapboxgl.Marker().setLngLat(this.map.getCenter()).addTo(this.map);

    this.map.on('click', (e: any) => {

      //Mis a jour du marker
      oldMarker.remove();
      oldMarker = new mapboxgl.Marker().setLngLat(e.lngLat).addTo(this.map);

      //Requete api
      console.log(this.service.getPlace(e.lngLat.lng, e.lngLat.lat));

      this.songTileService.setCoord(e.lngLat.lng, e.lngLat.lat);
      
      this.service.getPlace(e.lngLat.lng, e.lngLat.lat).then(district => {
        this.songTileService.ville = district[0];
        this.songTileService.setArtistAndSong(district[0], district[1], district[2]);
      })
      

    })

  }

}