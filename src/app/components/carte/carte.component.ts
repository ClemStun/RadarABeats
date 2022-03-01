import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { CarteService } from 'src/app/services/carte.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  map!: mapboxgl.Map;

  constructor(private service: CarteService) { }

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
      console.log(this.service.getDistrict(e.lngLat.lng, e.lngLat.lat));

    })

  }

}