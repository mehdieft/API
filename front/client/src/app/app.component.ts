import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import {AccountServiceService} from './services/account-service.service';
import { ToastrService } from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//data
users:any;
lang:'fa';
title = 'client';
hello="hello there";
languages=[{language:"en"},{language:"fa"}];
translatePicker=false;



setme(item:any){
  this.translate.setDefaultLang(item.language);
this.translate.use(item.language);
}

//constructor
  constructor(private http:HttpClient,
    private accountService:AccountServiceService,
    private translate:TranslateService,
    private toastr: ToastrService){
      translate.setDefaultLang('fa');
      translate.use('fa');
    }
  //ngOniit
   ngOnInit() {
     this.getusers();
     this.setCurentUser();
     console.log("kose nanat",this.languages)
   }
   translatePickerComponent(){
     this.translatePicker=!this.translatePicker;
   }
   setCurentUser(){
     const user:User =JSON.parse(localStorage.getItem('user'));
     this.accountService.setCurentUser(user);
   }


   
   setlanguage($event){
     console.log("im from parnet emiting",$event);
     this.setme($event);
     this.translatePicker=false;
    //  this.toastr.success(this.translate.instant('success',{value:${success}}));
     this.toastr.success(this.translate.instant('success', {value: 'success'}),this.translate.instant('successfully', {value: 'successfully'}));

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
