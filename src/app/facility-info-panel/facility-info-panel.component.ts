import {Component, OnInit, Input} from '@angular/core';
import {Facility} from '../facility';


@Component({
  selector: 'app-facility-info-panel',
  templateUrl: './facility-info-panel.component.html',
  styleUrls: ['./facility-info-panel.component.css'],
})
export class FacilityInfoPanelComponent implements OnInit {
  @Input() facility: Facility;

  constructor() {
  }

  ngOnInit() {
  }
}

