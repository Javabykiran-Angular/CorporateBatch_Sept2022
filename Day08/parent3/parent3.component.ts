import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {


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

  constructor() { }

  ngOnInit(): void {
  }

}
