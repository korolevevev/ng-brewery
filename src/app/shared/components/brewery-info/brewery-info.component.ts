import {Component, Input, OnInit} from '@angular/core';
import {IBrewery} from "../../models/brewery";
import {Map} from 'leaflet';

@Component({
  selector: 'app-brewery-info',
  templateUrl: './brewery-info.component.html',
  styleUrls: ['./brewery-info.component.sass']
})
export class BreweryInfoComponent implements OnInit{
  @Input() brewery: IBrewery

  public coords!: {longitude: number, latitude: number}

  private map: Map;
  private zoom: number;

  receiveMap(map: Map) {
    this.map = map;
  }

  receiveZoom(zoom: number) {
    this.zoom = zoom;
  }

  ngOnInit() {
    this.brewery = {...this.brewery, }
    this.coords = {longitude: parseFloat(this.brewery.longitude), latitude: parseFloat(this.brewery.latitude)};
  }
}
