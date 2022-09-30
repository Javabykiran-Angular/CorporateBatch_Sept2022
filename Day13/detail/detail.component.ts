import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  empobj:any=<Employee>{};

  constructor(private route:ActivatedRoute,
              private service:HttpService) { }

  ngOnInit(): void {
      this.GetDataFromUrl()
  }
  GetDataFromUrl(){
      this.route.paramMap
      .subscribe((param)=>{
          // console.log(param.get("id"))
          this.service.getParticularEmp(param.get("id"))
          .subscribe((response:any)=>{
            // console.log(response)
            this.empobj=response;
          })
      })
  }

  OnUpdate(){

  }

}
