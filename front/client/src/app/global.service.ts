import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private translate: TranslateService,private tost:ToastrService) { }
  translatefunc(msg){
    let value:string='';
    if(typeof msg =='string'){
      this.translate.get(msg).subscribe(res=>{
        value=res;

      }
      )
      return value;
    }else return 'not string';

  }
  translateWords(text) {
    var value: string = '';
    if (text != '' && typeof text == 'string')
      this.translate.get(text).subscribe(tran => { value = tran })
    return value;
  }



}
