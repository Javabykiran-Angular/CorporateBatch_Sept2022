import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from './../model/employee';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  @Input() parentdata:any=<Employee>{};

  allCountry:any[]=[];
  issubmitDissabled:boolean=true;
  backendResponse:string='';
  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.GetAllCountry();
  }
  GetAllCountry(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
        this.allCountry=response;
    })
  }

  onupdate(){

    this.parentdata.updateddtm=Date.now();
    this.parentdata.updatedby=sessionStorage.getItem("username");

    this.service.UpdateEmp(this.parentdata)
    .subscribe((response)=>{
      // console.log(response)
      this.issubmitDissabled=false;
      this.backendResponse=response;
    })
    

  }

}
