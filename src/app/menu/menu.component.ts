import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Facility} from '../facility';
import {Facilities} from '../facilities';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  facilities: Array<Facility> = Facilities;

  @Output() facilitySelected: EventEmitter<Facility> = new EventEmitter();


  onFacilitySelected(facility: Facility): void {
    this.facilitySelected.emit(facility);
  }

  ngOnInit() {
  }
}
