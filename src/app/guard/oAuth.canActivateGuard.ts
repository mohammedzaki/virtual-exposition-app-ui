/**
 * Created by Dev-Adel on 7/18/2017.
 */
import { Injectable } from '@angular/core';
import { CanActivate , Router} from '@angular/router';
import { APIConstants } from '../helpers/Constants/const-apis';

@Injectable()
export class CanActivateViaOAuthGuard implements CanActivate {

  constructor(public router : Router, private apiConst: APIConstants) {}
  canActivate() {

    if(localStorage.getItem(this.apiConst.LSTOKEN) === null){
      this.router.navigate(['/pages/patient/login']);
    }
    return !(localStorage.getItem(this.apiConst.LSTOKEN) === null) ;
  }
}
