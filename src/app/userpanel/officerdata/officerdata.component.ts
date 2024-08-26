import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-officerdata',
  templateUrl: './officerdata.component.html',
  styleUrls: ['./officerdata.component.css'],
  standalone: false

})
export class OfficerdataComponent implements OnInit {

  
  @ViewChild ('myFormAb', {read: NgForm}) dataEditTemp!:NgForm;
  private apiLink = 'https://computerkendra-3711a-default-rtdb.europe-west1.firebasedatabase.app/OfficerProfiles';
  btndataView:boolean = true;
  urlTemp:any;
  constructor(private _http:HttpClient) { }
  lineTagEdit:any;
  dataTagEdit:any;
  langEdit:any;
  sizeedit:any;
  datatable = [
    {
      lineTag:'lineTag', 
      dataTag:'dataTag', 
      lang:"lang", 
      size:'20kb'
    },
  ]

  ngOnInit(): void {
    this.dataget();
  }

  // Insert Operation    - DONE
  onSubmit(formData:any){
    if(this.btndataView){
      this.datatable.push(formData);
      this._http.put(this.apiLink+".json",this.datatable).subscribe(res=>{
        console.log(res);
      })
    }
    else{
      if(confirm('Are you Sure want to update this entry')){
        this._http.put(this.urlTemp,formData).subscribe(res=>{
          console.log(res);
        })
      }
    }
  }

// Fatech Operation        - DONE
  dataget(){
    this._http.get(this.apiLink+".json").subscribe(res=>{
       console.log(res);
       const dataupdate = JSON.stringify(res);
       this.datatable = JSON.parse(dataupdate);
    })
  }


// Edit Operation       - DONE
  edit(i:any){
    this.btndataView = false;
    let sr = i;
    this.urlTemp = this.apiLink+"/"+sr+".json";
    this.lineTagEdit = this.datatable[i].lineTag;
    this.dataTagEdit = this.datatable[i].dataTag;
    this.langEdit = this.datatable[i].lang;
    this.sizeedit = this.datatable[i].size;
    this.dataEditTemp.setValue({
      lineTag: this.datatable[i].lineTag,
      dataTag: this.datatable[i].dataTag,
      lang: this.datatable[i].lang,
      size: this.datatable[i].size,
    })
  }

  // Delete Operation    - DONE
  del(i:any){
    if(confirm("Do You want to delete this : "+this.datatable[i].lineTag)){
      this.datatable.splice(i, 1);
      this._http.put(this.apiLink+".json",this.datatable).subscribe(res=>{
        console.log(res);
      })
    }
  }

}
