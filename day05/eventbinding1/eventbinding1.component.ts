import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  flag:boolean=true;
  result:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
      if(this.flag==true){
        console.log("Click Event Is occur...");
        this.flag=false;
      }
   
  }

  onimage(){
    console.log('On Image click...')
  }
  ondollerEvent(myevent:any){
    console.log(myevent)
    console.log("Data is "+myevent.target.value)
  }

  onSend(myname:any){
      console.log(myname);
      console.log(myname.value)
      myname.style.background='green';
      myname.style.color='white';
  }

  onSend1(myname:string){
    console.log("===== "+myname);
  }

  onAddition(num1:any,num2:any){

      let n1=+num1;
      let n2=+num2;

      // this.result=num1+num2;
      this.result=n1+n2;
  }

}
