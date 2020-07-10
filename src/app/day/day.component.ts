import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  days =[]
  tasks =[]
  constructor() { }

  ngOnInit(): void {
  }
adddays(){
  this.days.push({
    id : this.days.length +1,
    name: `Day ${this.days.length + 1}`
  })
}
addtask()
{
let j=0;
  j = this.tasks[this.tasks.length-1];
  this.tasks.push(++j)
}

}
