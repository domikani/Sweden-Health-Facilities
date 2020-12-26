import {Component, OnInit, AfterViewInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import {Facility} from '../facility';
import {LeafletMap} from './leaflet-map';

@Component({
  selector: 'app-facility-info-map',
  templateUrl: './facility-info-map.component.html',
  styleUrls: ['./facility-info-map.component.css']
})
export class FacilityInfoMapComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() facility: Facility;
  map: LeafletMap;


  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.map = new LeafletMap('map');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.map) {
      return;
    }

    if (changes.facility.currentValue) {
      const {lat, lng, name} = changes.facility.currentValue;
      this.map.update(lat, lng, name);
    }
  }
}
