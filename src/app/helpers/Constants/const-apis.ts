import { Injectable } from '@angular/core';


@Injectable()
export class APIConstants {
  public LSTOKEN = 'token';
  public LSUSEREMAIL= 'userEmail';
  public LSHOSPITALID = 'hospitalId';
  public LSHOSPITALName = 'hospitalName';
  public LSUSERID = 'userId';
  public LSPATIENTID = 'patientId';

  public LocalStorageToken = localStorage.getItem(this.LSTOKEN);

  public BACKENDURL = 'http://api.ihregistery.eye-ltd.com/';
  public APIURL = 'http://api.ihregistery.eye-ltd.com/api/v1';
  //public APIURL = 'http://ihreg.localhost/api/v1';


  public TOKENURL = this.APIURL + '/apiLogin';

  public AUTHURL = this.BACKENDURL + 'oauth/authorize';


  public getLocalStorageData(keyName){
    return parseInt(localStorage.getItem(keyName));

  }
}
