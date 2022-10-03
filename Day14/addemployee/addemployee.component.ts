import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  allCountry:any[]=[];
  constructor(private service :HttpService,
              private router:Router) { }

  ngOnInit(): void {
    this.GetAllCountry();

  }

  GetAllCountry(){
      this.service.getAllCountry()
      .subscribe((response:any)=>{
          this.allCountry=response;
      })
  }


  onSubmit(f:NgForm){
    let obj={
      name:f.value.name,
      departmentit: f.value.departmentit,
      phoneno:f.value.phoneno,
      status:f.value.status,
      country:f.value.country,
      createddtm:Date.now(),
      createdby:sessionStorage.getItem("username"),
      updateddtm:Date.now(),
      updatedby:sessionStorage.getItem("username")
    }

    this.service.AddRecord(obj)
    .subscribe((response)=>{
      // console.log(response);
      this.router.navigate(['/home']);
    })

  }

}
