import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(myname:any){
    console.log("Change event occur...")

    console.log(myname.value)
    myname.style.background='green';
    myname.style.color='white';

  }

  onChange1(myevent:any){
    console.log("===== "+myevent.target.value);
  }

}
