import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _router:Router, private _http:HttpClient) { }
  isLoggedIn:any=true;
  private authUrl ='https://computerkendra-3711a-default-rtdb.europe-west1.firebasedatabase.app/authCondi.json'; 


  ngOnInit(): void {
    this.dataGET();
    this.manuchange();
  }

  ngOnChanges(){
    console.log('sothing change');
  }
  
  // Menu change into page redirection
  manuchange(){
    if(this.isLoggedIn==true){
      this._router.navigate(['/home']);
    }else{
      this.isLoggedIn==false;
      this._router.navigate(['/adminpanel']);
    }
  }

  // GET API
  dataGET(){
    this._http.get(this.authUrl).subscribe(res=>{
      var datamain =  Object.entries(res);
      datamain = datamain[0][1];
      console.log("Get Header = " + datamain);
      // this.isLoggedIn = datamain;
      // console.log('Header Acting = '+ this.isLoggedIn);
    })
  }

  logout(){
    this._http.put(this.authUrl,{
      value:'false'
    }).subscribe(res=>{
      console.log(res);
    })
  }

}
