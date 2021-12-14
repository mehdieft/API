import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import {AccountServiceService} from './services/account-service.service';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private http:HttpClient,private accountService:AccountServiceService,private toastr: ToastrService){}
  //ngOniit
   ngOnInit() {
     this.getusers();
     this.setCurentUser();
   }
   setCurentUser(){
     const user:User =JSON.parse(localStorage.getItem('user'));
     this.accountService.setCurentUser(user);
   }


   toaste(){
     this.toastr.success('success','toaste works!');

   }

//methods
getusers(){
  this.http.get('https://localhost:5001/api/users').subscribe(response=>{
    this.users=response;
    console.log("users from api",this.users);
  },
  error=>{
    console.log("this is erro happens",error)
  })

}

}
