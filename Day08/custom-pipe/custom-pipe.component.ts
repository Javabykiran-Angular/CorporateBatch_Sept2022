import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nesciunt laudantium dolore dicta beatae? Facilis, voluptatum omnis. Nisi maxime facere vel ducimus officiis adipisci temporibus deleniti sunt tempora, vitae dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nesciunt laudantium dolore dicta beatae? Facilis, voluptatum omnis. Nisi maxime facere vel ducimus officiis adipisci temporibus deleniti sunt tempora, vitae dolore.';
  constructor() { }

  ngOnInit(): void {
  }

}
