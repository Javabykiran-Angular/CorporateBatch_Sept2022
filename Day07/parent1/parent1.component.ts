import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit,AfterViewInit {

  @ViewChild('divelement')  myDiv!:ElementRef;

  @ViewChild(Child3Component) ChildComp!:Child3Component;


  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.myDiv);
    this.myDiv.nativeElement.style.background='cyan';
  }

  ngOnInit(): void {
      console.log(this.myDiv);
  }

  onAccessChildProperty(){
      this.ChildComp.username='Sumit Raokhande';
  }

  onAccessChildMethod(){
      this.ChildComp.onSend();
  }

}
