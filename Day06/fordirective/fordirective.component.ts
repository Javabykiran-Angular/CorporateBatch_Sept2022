import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

    course:string[]=['Angular 12','Core Java','Spring Boot','JSP','React Js','Embber Js','Vue Js'];


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

      selected:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){

    console.log("Mouse over Event Occur...");
    this.selected=item.name;
  }

  onMouseOut(){
    this.selected='';
  }

}
