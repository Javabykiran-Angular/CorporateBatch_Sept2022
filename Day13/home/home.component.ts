import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit(): void {
   this.getAllEmployee();
   
  }

  getAllEmployee(){
      this.service.getAllEmp()
      .subscribe((response:any)=>{
        // console.log(response)
        this.EmpData=response;
      })
  }


}
