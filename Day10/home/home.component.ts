import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onPage1(){
      this.router.navigate(['/Page1']);
  }

  onPage2(){
    this.router.navigate(['/Page2',this.myid]);
  }
  onPage3(){
    this.router.navigate(['/Page3'])
  }

  onFollower(){
    this.router.navigate(['/Follower']);
  }

  onQueryParam(){
    this.router.navigate(['/QueryParameter'],{
        queryParams:this.jsonObj
    })
  }

}
