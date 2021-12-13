import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AccountServiceService} from '../../services/account-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  registerUser(){
    const dialog = this.dialog.open(RegisterDialog,{width: '95%', minHeight: '20vh', maxWidth: '75vw', closeOnNavigation: true});
  }
  loginUser(){
    this.dialog.open(LoginDialog,{width: '95%', minHeight: '20vh', maxWidth: '75vw', closeOnNavigation: true});
  }

  constructor(private dialog:MatDialog,) { }

  ngOnInit(): void {
  }

}
@Component({
  // selector: 'dialog-content-example-dialog',
  templateUrl: './registerDialog.component.html',
})
export class RegisterDialog {
  constructor(private accountService: AccountServiceService){}
   model:any={}
  login(){
    console.log("this is model ",this.model)
        this.accountService.register(this.model).subscribe(res=>{
          console.log("this is resault",res)
        },err=>{
          console.log("error is happaned",err);
        }
        )

      }
    }

    @Component({
      // selector: 'dialog-content-example-dialog',
      templateUrl: './loginDialog.componenet.html',
    })
    export class LoginDialog {
      constructor(private accountService: AccountServiceService){}
    }
