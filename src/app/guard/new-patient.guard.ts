/**
 * Created by Dev-Adel on 7/19/2017.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { APIConstants } from '../helpers/Constants/const-apis';

@Injectable()
export class NewPatientGuard implements CanActivate {

  constructor(public router : Router, private apiConst: APIConstants) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let patientIdLocalStorage = localStorage.getItem(this.apiConst.LSPATIENTID);
    if(patientIdLocalStorage === '' || patientIdLocalStorage === null){
      // patient not selected
      this.router.navigate(['/pages/patient/patientInfo/patientProfile']);

      return false;
    }
    // patient selected
    return true;
  }
}
