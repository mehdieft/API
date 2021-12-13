import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AccountServiceService} from '../../services/account-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  IsLogined:false;


  registerUser(){
    const dialog = this.dialog.open(RegisterDialog,{width: '95%', minHeight: '20vh', maxWidth: '75vw', closeOnNavigation: true});
  }
  loginUser(){
   let dg= this.dialog.open(LoginDialog,{width: '95%', minHeight: '20vh', maxWidth: '75vw', closeOnNavigation: true});
   dg.afterClosed().subscribe(resLogin=>{
     console.log("res login",resLogin);
     this.accountService.login(resLogin).subscribe(res=>{
      console.log("res----",res);
    })
   })
  }

  constructor(private dialog:MatDialog,private accountService: AccountServiceService) { }

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
   
  register(){
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
     
      model:any={};
      constructor(private accountService: AccountServiceService,private dialogRef: MatDialogRef<LoginDialog>,
        ){}
      login(){
        console.log("this is login method",this.model)
        this.dialogRef.close(this.model)
       

      }
    }
