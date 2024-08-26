import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleshnews',
  templateUrl: './fleshnews.component.html',
  styleUrls: ['./fleshnews.component.css']
})
export class FleshnewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() topslider:any;

}
