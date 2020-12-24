import {Component, OnInit, Input} from '@angular/core';
import {Facility} from '../facility';

@Component({
  selector: 'app-facility-info',
  templateUrl: './facility-info.component.html',
  styleUrls: ['./facility-info.component.css'],
})
export class FacilityInfoComponent implements OnInit {
  @Input() facility: Facility;

  constructor() {
  }

  ngOnInit() {
  }
}
