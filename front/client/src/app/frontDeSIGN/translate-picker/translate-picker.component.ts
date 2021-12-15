import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate-picker',
  templateUrl: './translate-picker.component.html',
  styleUrls: ['./translate-picker.component.css']
})
export class TranslatePickerComponent implements OnInit {
@Input() translateLanguages:any;
  constructor() { }

  ngOnInit(): void {
    console.log("this is all --->",this.translateLanguages)

  }

}
