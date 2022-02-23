import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let mapD = new DisplayMap();
    let oldMarker = new mapboxgl.Marker().setLngLat(mapD.map.getCenter()).addTo(mapD.map);

    mapD.map.on('click', (e: any) => {
      console.log(e);
      oldMarker.remove();
      oldMarker = new mapboxgl.Marker().setLngLat(e.lngLat).addTo(mapD.map);
    })

  }

}

class DisplayMap{

  map: mapboxgl.Map;

  constructor(){

    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.token,
      container: "carte", // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [0.1988608, 48.0076426], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

  }

}