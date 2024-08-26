import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-marqueedata',
  templateUrl: './marqueedata.component.html',
  styleUrls: ['./marqueedata.component.css'],
  standalone: false
})
export class MarqueedataComponent implements OnInit {

  
  @ViewChild ('myFormAb',{ read: NgForm }) dataEditTemp!:NgForm;
  private apiLink = 'https://computerkendra-3711a-default-rtdb.europe-west1.firebasedatabase.app/HomeMarquee';
  btndataView:boolean = true;
  urlTemp:any;
  constructor(private _http:HttpClient) { }
  lineTagEdit:any;
  dataTagEdit:any;
  firebaseEdit:any;
  langEdit:any;
  dataEdit:any;
  sizeedit:any;
  datatable = [
    {
      lineTag:'lineTag', 
      dataTag:'dataTag', 
      filebase:'filebase', 
      lang:"lang", 
      date:'26-08-1991', 
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

  // Fatech Operation   - DONE
  dataget(){
    this._http.get(this.apiLink+".json").subscribe(res=>{
       console.log(res);
       const dataupdate = JSON.stringify(res);
       this.datatable = JSON.parse(dataupdate);
    })
  }


  // // Edit Operation
  edit(i:any){
    this.btndataView = false;
    let sr = i;
    this.urlTemp = this.apiLink+"/"+sr+".json";
    this.lineTagEdit = this.datatable[i].lineTag;
    this.dataTagEdit = this.datatable[i].dataTag;
    this.firebaseEdit = this.datatable[i].filebase;
    this.langEdit = this.datatable[i].lang;
    this.dataEdit = this.datatable[i].date;
    this.sizeedit = this.datatable[i].size;
    this.dataEditTemp.setValue({
      lineTag: this.datatable[i].lineTag,
      dataTag: this.datatable[i].dataTag,
      filebase:  this.datatable[i].filebase,
      lang: this.datatable[i].lang,
      date: this.datatable[i].date,
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
