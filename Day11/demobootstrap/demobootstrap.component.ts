import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {


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
