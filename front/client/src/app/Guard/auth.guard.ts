import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountServiceService } from '../services/account-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService :AccountServiceService,private toastr: ToastrService,){}
  canActivate(): Observable<boolean>{
    return this.accountService.currentUser$.pipe(
      map(user=>{
        if(user) return true;
        this.toastr.error('error');

      })
    )
  }
  
}
