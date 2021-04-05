import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthguardServiceService} from './services/Authguard/authguard-service.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private AuthGuard:AuthguardServiceService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('currentuser')){
 
        return true;
  
      }      
      else {
     
        this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}})
  
        return false;
  
      }
  }
  
}
