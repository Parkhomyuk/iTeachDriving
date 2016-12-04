import { Component } from '@angular/core';

@Component({
  selector: 'map-root',
  templateUrl: './map.component.html',
  styleUrls: ['./app.component.css']
})
export class MapComponent {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}

