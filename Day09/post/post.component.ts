import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    posts:any[]=[];
    isHidden:boolean=true;
    id:string='';
    title:string='';
    body:string='';
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetPost();
  }

  GetPost(){
      this.service.getPost()
      .subscribe((response:any)=>{
        console.log(response);
        this.posts=response;
      },(error)=>{
        // alert('Invalid error occur');

        if(error.status>=400 && error.status<=499){
          alert('Client Side error '+error.status);
        }else if(error.status>=500 && error.status<=599){
          alert('server Side error '+error.status);
        }else{
          alert('Invalid error occur');
        }

      })
  }

  onSend(inputTitle:string,inputBody:string){

      let obj={
        title:inputTitle,
        body:inputBody
      }

      this.service.SendData(obj)
      .subscribe((response)=>{
          console.log(response);
      })

  }

  onEdit(item:any){
    console.log(item);
    this.isHidden=false;
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
  }

  onupadate(){
      let obj={
        id:this.id,
        title:this.title,
        body:this.body
      }

      this.service.Updatedata(obj)
      .subscribe((response)=>{
          console.log(response);
      })

  }

  onDelete(id:any){

      this.service.DeleteData(id)
      .subscribe((response)=>{
        console.log(response)
      })

  }

}
