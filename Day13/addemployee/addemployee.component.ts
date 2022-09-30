import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  allCountry:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){

  }

}
