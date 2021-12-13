import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  registerUser(){
    const dialog = this.dialog.open(LoginDialog,{width: '95%', minHeight: '20vh', maxWidth: '75vw', closeOnNavigation: true});

  }

  constructor(private dialog:MatDialog,) { }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './registerDialog.component.html',
})
export class LoginDialog {
  register:{
    username:"",
    password:''
  }
  login(){
    console.log("this is object ",this.register);
  }
}