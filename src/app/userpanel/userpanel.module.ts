import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueedataComponent } from './marqueedata/marqueedata.component';
import { WahtsNewsComponent } from './wahts-news/wahts-news.component';
import { OfficerdataComponent } from './officerdata/officerdata.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AboutActComponent } from './about-act/about-act.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MarqueedataComponent,
    WahtsNewsComponent,
    OfficerdataComponent,
    AdminpanelComponent,
    AboutActComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
      MarqueedataComponent,
      WahtsNewsComponent,
      OfficerdataComponent,
      AdminpanelComponent,
      AboutActComponent,
  ]
})
export class UserpanelModule {  }
