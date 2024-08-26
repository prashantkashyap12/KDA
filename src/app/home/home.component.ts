import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Livenews } from '../interface/livenews';
import { PoptopVal } from '../interface/poptop-val';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private whatsNewsdata = 'https://computerkendra-3711a-default-rtdb.europe-west1.firebasedatabase.app/whatsNews';
  private officerdatalist = 'https://computerkendra-3711a-default-rtdb.europe-west1.firebasedatabase.app/OfficerProfiles';
  private homemarquee = 'https://computerkendra-3711a-default-rtdb.europe-west1.firebasedatabase.app/HomeMarquee';

  constructor(private _http:HttpClient) { 
  }
  ngOnInit(): void {
    this.homeMarquee();
    this.whatsNews();
    this.OfficerProfile();
  }


  // homeMarquee  Data    ||   DONE
  marqueedata:any[]  = [
    { lineTag:'- - - Comming soon pk - - - ', dataTag:'[ News ]', size:'0kb', lang:'Hindi', date:'20/12/2023',  filebase:'path'},
  ]
  homeMarquee(){
    this._http.get(this.homemarquee+".json").subscribe(res=>{
      const dataupdate = JSON.stringify(res);
      this.marqueedata = JSON.parse(dataupdate);
   })
  }


  // WhatsNews Data    ||   DONE
  wahtsNews:any[] = [
    {filebase:'', lineTag:'', dataTag:'', size:'', lang:'', date:''},
  ]
  whatsNews(){
    this._http.get(this.whatsNewsdata+".json").subscribe(res=>{
      var dataupdate = JSON.stringify(res);
      this.wahtsNews = JSON.parse(dataupdate);
      console.log(this.wahtsNews);
   })
  }

  // Profile Data    ||   DONE
  officerdata:any = [
    {
      dataTag:'../../assets/images/202204021007315742jaswant.jpg', lineTag:'Ph. Nitin Ramesh Gokarn (IAS)', lang:'(Principal Secretary)', size:'Housing and Urban Planning, Uttar Pradesh'},
  ]
  OfficerProfile(){
    this._http.get(this.officerdatalist+".json").subscribe(res=>{
      const dataupdate = JSON.stringify(res);
      this.officerdata = JSON.parse(dataupdate);
    })
  }

  Acts:any = [
    {name:'Apartment Ownership Act,2010 Hindi', path:'Apartment Ownership Act,2010 Hindi.pdf' },
    {name:'Electricity Act 2003	', path:'	Electricity Act 2003.pdf' },
    {name:'Municipalities Act 1916	', path:'Municipalities Act 1916.pdf' },
    {name:'Real Estate Regulatory Act,2016', path:'	Real Estate Regulatory Act,2016.pdf'},
    {name:'Regulations Of Building Operations Act- 1958,U.P.', path:'	RegulationsOfBuildingOperationsAct1958.pdf' },
    {name:'RTI Act', path:'	RTI Act.pdf' },
    {name:'Urban Planning and Development Act 1973', path:'Urban Planning and Development Act 1973.pdf' },
    {name:'Land Acquisition Act	', path:'	LandAcquisitionAct2013.pdf' },
  ]

}
