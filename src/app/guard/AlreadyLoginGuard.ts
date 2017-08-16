/**
 * Created by Dev-Adel on 7/18/2017.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { APIConstants } from '../helpers/Constants/const-apis';

@Injectable()
export class AlreadyLoginGuard implements CanActivate {

  constructor(public router : Router, private apiConst: APIConstants) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(localStorage.getItem(this.apiConst.LSTOKEN) === null){
      // already logged in
      this.router.navigate(['/patientTable'], { queryParams: { returnUrl: state.url }});

      return false;
    }
    // not logged in so redirect to login page with the return url and return false
    return true;
  }
}
