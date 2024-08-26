import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { MarqueedataComponent } from './userpanel/marqueedata/marqueedata.component';
import { OfficerdataComponent } from './userpanel/officerdata/officerdata.component';
import { WahtsNewsComponent } from './userpanel/wahts-news/wahts-news.component';
import { AboutActComponent } from './userpanel/about-act/about-act.component';
import { AdminpanelComponent } from './userpanel/adminpanel/adminpanel.component';

import { AboutKdaComponent } from './webpages/about-kda/about-kda.component';
import { AboutRuleComponent } from './webpages/about-rule/about-rule.component';
import { AboutByruleComponent } from './webpages/about-byrule/about-byrule.component';
import { AboutGalleryComponent } from './webpages/about-gallery/about-gallery.component';
import { For0ForErrorComponent } from './webpages/for0-for-error/for0-for-error.component';
import { StateGovtComponent } from './webpages/state-govt/state-govt.component';
import { CentralGovtComponent } from './webpages/central-govt/central-govt.component';
import { MemberStractureComponent } from './webpages/member-stracture/member-stracture.component';
import { MeetingDetailsComponent } from './webpages/meeting-details/meeting-details.component';
import { AuthAreaComponent } from './webpages/auth-area/auth-area.component';
import { SealedPropertyComponent } from './webpages/sealed-property/sealed-property.component';
import { KhurjaMasterComponent } from './webpages/khurja-master/khurja-master.component';
import { NcrPlaningComponent } from './webpages/ncr-planing/ncr-planing.component';
import { SrPlaningComponent } from './webpages/sr-planing/sr-planing.component';
import { RtiActsComponent } from './webpages/rti-acts/rti-acts.component';
import { RtiManualsComponent } from './webpages/rti-manuals/rti-manuals.component';
import { CitizenChartComponent } from './webpages/citizen-chart/citizen-chart.component';
import { EmpListComponent } from './webpages/emp-list/emp-list.component';
import { PoiApioComponent } from './webpages/poi-apio/poi-apio.component';
import { PublicNoticeComponent } from './webpages/public-notice/public-notice.component';
import { TenderComponent } from './webpages/tender/tender.component';
import { AuctionComponent } from './webpages/auction/auction.component';
import { EioComponent } from './webpages/eio/eio.component';
import { CancelTanderComponent } from './webpages/cancel-tander/cancel-tander.component';
import { PrivacyPolicyComponent } from './webpages/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './webpages/refund-policy/refund-policy.component';
import { TermCodiComponent } from './webpages/term-codi/term-codi.component';
import { AboutActwebComponent } from './webpages/about-actweb/about-actweb.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  
  // Web Designing
  {path:'home', component:HomeComponent},
  {path:'about-kda', component: AboutKdaComponent},
  {path:'aboutact', component:AboutActwebComponent},
  {path:'about-rule', component:AboutRuleComponent},
  {path:'bye-lows', component:AboutByruleComponent},
  {path:'about-gallery', component:AboutGalleryComponent},
  {path:'StateGovt', component:StateGovtComponent},
  {path:'CentralGovt', component:CentralGovtComponent},
  {path:'MemberStracture', component:MemberStractureComponent},
  {path:'MeetingDetails', component:MeetingDetailsComponent},
  {path:'AuthArea', component:AuthAreaComponent},
  {path:'SealedProperty', component:SealedPropertyComponent},
  {path:'KhurjaMaster', component:KhurjaMasterComponent},
  {path:'NcrPlaning', component:NcrPlaningComponent},
  {path:'SrPlaning', component:SrPlaningComponent},
  {path:'RtiActs', component:RtiActsComponent},
  {path:'RtiManuals', component:RtiManualsComponent},
  {path:'CitizenChart', component:CitizenChartComponent},
  {path:'EmpList', component:EmpListComponent},
  {path:'PoiApio', component:PoiApioComponent},
  {path:'PublicNotice', component:PublicNoticeComponent},
  {path:'Tender', component:TenderComponent},
  {path:'Auction', component:AuctionComponent},
  {path:'Eio', component:EioComponent},
  {path:'CancelTander', component:CancelTanderComponent},
  {path:'privacypolicy',component:PrivacyPolicyComponent},
  {path:'refund&policy',component:RefundPolicyComponent},
  {path:'term&condi',component:TermCodiComponent},

  // Admin panel Routing
  {path:'WhatNews', component:WahtsNewsComponent},
  {path:'topslider', component:MarqueedataComponent},
  {path:'userprofile', component:OfficerdataComponent},
  {path:'aboutactadmin', component:AboutActComponent},
  {path:'adminpanel', component:AdminpanelComponent},
  {path:'**', component:For0ForErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
