import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopsliderOneComponent } from './topslider-one/topslider-one.component';
import { FleshnewsComponent } from './fleshnews/fleshnews.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
@NgModule({
  declarations: [
    TopsliderOneComponent,
    FleshnewsComponent,
    UserprofileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TopsliderOneComponent,
    FleshnewsComponent,
    UserprofileComponent
  ]
})
export class DynamiccompModule { }
