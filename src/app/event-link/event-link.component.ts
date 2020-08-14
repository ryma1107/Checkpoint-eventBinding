import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-link',
  templateUrl: './event-link.component.html',
  styleUrls: ['./event-link.component.css']
})
export class EventLinkComponent implements OnInit {

  color = "red";
  firstColor = this.color
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){

    console.log(this.firstColor)
    this.color=this.firstColor;
  }

}
