import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { Employee } from './../model/employee';
import { DialogService } from '../dialog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[];
  isRadioCheck:boolean=false;
  modalRef!: BsModalRef;  
  empObj=<Employee>{};

  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };

  constructor(private service:HttpService,
    private modalservice:BsModalService,
    private dialogservice:DialogService) { }

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

  RadioCheck(){
      if(this.isRadioCheck)
      return true;
      else
      return false;
  }

  onUpdate(popUp:TemplateRef<any>){
    if(this.RadioCheck()){
    //perform logic here
    this.modalRef = this.modalservice.show(popUp, this.config);

    }else{
      alert("Please Select record to Update...")
    }
  }

  onRadioCheck(item:any){
    this.isRadioCheck=true;
    this.empObj=item;
  }

  onDelete(){
    if(this.RadioCheck()){
      //perform logic here
          this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
          .afterClosed()
          .subscribe((res)=>{
            if(res){
              //logic
            }
            else{
              alert("Record is not deleted")
            }
          })

      }else{
        alert("Please Select record to Delete...")
      }
  }


}
