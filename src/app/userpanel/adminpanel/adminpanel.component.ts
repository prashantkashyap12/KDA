import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }

  userName:any;
  userPwd:any; 
  private authUrl ='https://computerkendra-3711a-default-rtdb.europe-west1.firebasedatabase.app/authCondi.json'; 
  dataLogin(a:any){
    this.userName = a.value.userName;
    this.userPwd = a.value.userpassword;
    if(this.userName == 'cdb' && this.userPwd =='123456'){
      console.log('true');
      const condivalue = 'ture';
      this._http.put(this.authUrl,{
        value:'true'
      }).subscribe(res=>{
        console.log(res);
      })
    }else{
      const condivalue = 'false';
      this._http.put(this.authUrl,{
        value:'false'
      }).subscribe(res=>{
        console.log(res);
      })
    }
  }


  
}
