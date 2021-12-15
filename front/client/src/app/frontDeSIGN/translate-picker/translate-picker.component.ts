import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-translate-picker',
  templateUrl: './translate-picker.component.html',
  styleUrls: ['./translate-picker.component.css']
})
export class TranslatePickerComponent implements OnInit {
@Input() translateLanguages:any;
@Output() selectedTranslate=new EventEmitter();
list:any;
mylist=[1,,2,3,4,5,6,7,8]
  constructor() { }

  ngOnInit(): void {
    console.log("this is all --->",this.translateLanguages)
    this.list=this.translateLanguages;
    console.log("*****8",this.list)

  }
  setTranslate(item){
    console.log("this is selected language",item)
    this.selectedTranslate.emit(item);
  }


}
