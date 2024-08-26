import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topslider-one',
  templateUrl: './topslider-one.component.html',
  styleUrls: ['./topslider-one.component.css']
})
export class TopsliderOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() fleshnews:any;

}
