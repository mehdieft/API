import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images=[
 
    {path:"assets/images/homepage1.jpg"},
    {path:"assets/images/homepage2.jpg"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
