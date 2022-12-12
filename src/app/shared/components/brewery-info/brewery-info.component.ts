import {Component, Input} from '@angular/core';
import {IBrewery} from "../../models/brewery";
import {Map} from 'leaflet';

@Component({
  selector: 'app-brewery-info',
  templateUrl: './brewery-info.component.html',
  styleUrls: ['./brewery-info.component.sass']
})
export class BreweryInfoComponent {
  @Input() brewery: IBrewery

  private map: Map;
  private zoom: number;

  receiveMap(map: Map) {
    this.map = map;
  }

  receiveZoom(zoom: number) {
    this.zoom = zoom;
  }
}
