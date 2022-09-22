import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

       @Output() ChildStrEvent=new EventEmitter();

    strData:string='Hopes so U r Enjoying Angular 12 Module';

    prodArr=[
      {
        name:'Nokia',
        price:20000,
        qty:1
      },
      {
        name:'Lava',
        price:10000,
        qty:1
      },
      {
        name:'onePlus',
        price:35000,
        qty:2
      },
      {
        name:'Realme',
        price:18000,
        qty:2
      },
      {
        name:'Motorolla',
        price:30000,
        qty:1
      }

    ]

      @Output() ChildArrObjData=new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  Onsend(){
        this.ChildStrEvent.emit(this.strData);
        this.ChildArrObjData.emit(this.prodArr);
  }

}
