import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FacilityInfoComponent } from './facility-info/facility-info.component';
import { FacilityInfoPanelComponent } from './facility-info-panel/facility-info-panel.component';
import { FacilityInfoMapComponent } from './facility-info-map/facility-info-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FacilityInfoComponent,
    FacilityInfoPanelComponent,
    FacilityInfoMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
