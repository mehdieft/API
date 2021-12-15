import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images=[
    {path:"https://designmodo.com/wp-content/uploads/2015/06/2-Personal-portfolio-of-Tomek-Michalski.jpg"},
    {path:"https://designmodo.com/wp-content/uploads/2015/06/2-Personal-portfolio-of-Tomek-Michalski.jpg"},
    {path:"https://designmodo.com/wp-content/uploads/2015/06/2-Personal-portfolio-of-Tomek-Michalski.jpg"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
