import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/servicios/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class PagarGuard implements CanActivate {
  constructor(private loginservice : LoginService , private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const res=this.loginservice.islogeado();
      if(res){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
