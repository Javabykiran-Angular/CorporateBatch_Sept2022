import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  myid:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.GetDataFromUrl();
  }
  GetDataFromUrl(){
      this.route.paramMap
      .subscribe((param)=>{
        // this.myid=param.get('id');
        console.log(param.get('id'));
      })
  }

}
