import {Component} from '@angular/core';
import {Facility} from './facility';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Sweden Health Facilities (OSM)';

  currentFacility: Facility;

  handleFacilityChange(facility: Facility): void {
    this.currentFacility = facility;
  }
}
