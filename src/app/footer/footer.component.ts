import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dataview:any=true;
  private geturl = 'https://computerkendra-3711a-default-rtdb.europe-west1.firebasedatabase.app/authCondi.json'; 

  constructor(private _http:HttpClient) { }
  ngOnInit(): void {
    this.footerDynamic()
  }


  footerDynamic(){
    this._http.get(this.geturl).subscribe(res=>{
      var footerdata = Object.entries(res);
      footerdata = footerdata[0][1];
      console.log("Get Footer = " + footerdata);
      // this.dataview= footerdata;
      // console.log('footer Acting = '+ this.dataview);
    })
  }


  







}
