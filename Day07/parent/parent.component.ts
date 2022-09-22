import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='U learn Angular 12 from Sumit Raokhande';

  jsonobj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  receivestrData:string='';
  recevieArrObjData:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
