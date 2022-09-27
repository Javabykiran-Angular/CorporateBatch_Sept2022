import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetDataFromUrl();
  }

  GetDataFromUrl(){
      this.route.queryParamMap
      .subscribe((param)=>{

          console.log("ID:: "+param.get('id'))
          console.log("Fname:: "+param.get('fname'))
          console.log("lname:: "+param.get('lname'))
      })
  }

}
