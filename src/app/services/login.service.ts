/**
 * Created by Dev-Adel on 7/18/2017.
 */
import { Injectable } from '@angular/core';
import { Http , URLSearchParams , Response, Headers,RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { APIConstants } from '../helpers/Constants/const-apis';


@Injectable()
export class LoginService {
  private OauthLoginEndPointUrl;  // Oauth Login EndPointUrl to web API
  private tokenUrl;
  private clientId ='5';
  private clientSecret = 'q9IG1QkOdOkxX8kbdEqDBh7zOjLgdAOybdTQabNX';
  private redirect_uri = 'http://localhost:4200/';

  constructor(public http: Http, private apiConst: APIConstants) {
    this.OauthLoginEndPointUrl = this.apiConst.AUTHURL;
    this.tokenUrl = this.apiConst.TOKENURL;

  }



  getAccessToken(username, password) {
    var headers = new Headers({
      //"Content-Type": "application/json",
      "Accept": "application/json"
    });


    let postData = {
      grantType: "password",
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      username: username,
      password: password,
      scope: ""
    };
    console.log(this.tokenUrl);
    return this.http.post(this.tokenUrl, postData, {
      headers: headers
    })
      .map(this.handleData)
      .catch(this.handleError);
  }


  private handleData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead

    // TODO: implement error handling here.
    return Observable.throw(errMsg);
  }

  public logout() {
    localStorage.removeItem('token');
  }
}
