import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//data
users:any;
title = 'client';
hello="hello there";



//constructor
  constructor(private http:HttpClient){}
  //ngOniit
   ngOnInit() {
     this.getusers();
   }


//methods
getusers(){
  this.http.get('https://localhost:5001/api/Users').subscribe(response=>{
    this.users=JSON.parse(JSON.stringify(response));
  },
  error=>{
    console.log("this is erro happens",error)
  })

}

}
