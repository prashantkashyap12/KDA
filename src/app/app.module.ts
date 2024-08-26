import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { DynamiccompModule } from './dynamiccomp/dynamiccomp.module';
import { UserpanelModule } from './userpanel/userpanel.module';
import { WebpagesModule } from './webpages/webpages.module';

import { FormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DynamiccompModule,  // dynamic pages Departments
    UserpanelModule,    // Userpanel pages Departments
    WebpagesModule,     // Web pages Departments
    
    FormsModule,         // CRED Operations    
    HttpClientModule     // API Intergation

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
