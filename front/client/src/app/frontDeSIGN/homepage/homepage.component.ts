import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';
import {AccountServiceService} from '../../services/account-service.service';
import { ToastrService } from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http:HttpClient,
    private accountService:AccountServiceService,
    private translate:TranslateService,
    private global:GlobalService,
    private toastr: ToastrService){
      translate.setDefaultLang('fa');
      translate.use('fa');
    }
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
         this.toastr.error(this.global.translatefunc('fuckYOU'),this.global.translatefunc('fuckYOU'))
         this.setme($event);
         this.translatePicker=false;
         this.toastr.success(this.translate.instant('plz', {value: 'plz'}),this.translate.instant('plz', {value: 'plz'}))
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
      })
    
    }

}
