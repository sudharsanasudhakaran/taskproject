import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  days =[]
  constructor() { }

  ngOnInit(): void {
  }
adddays(){
  let i =0;
    i = this.days[this.days.length-1];
    this.days.push(++i)
}
}
