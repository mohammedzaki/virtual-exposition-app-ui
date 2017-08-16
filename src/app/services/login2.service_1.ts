/**
 * Created by Dev-Adel on 7/18/2017.
 */
import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {APIConstants} from '../helpers/Constants/const-apis';
import {CustomHttp} from "app/services/CustomHttp";

import {Inject, Optional} from '@angular/core';
import {RequestMethod, RequestOptionsArgs} from '@angular/http';
import {ResponseContentType} from '@angular/http';

import 'rxjs/add/operator/map';

import * as models from '../model/models';
//import { BASE_PATH }                                         from '../variables';
//import { Configuration }                                     from '../configuration';

@Injectable()
export class LoginService {
    private OauthLoginEndPointUrl;  // Oauth Login EndPointUrl to web API
    private tokenUrl;
    private clientId = '5';
    private clientSecret = 'q9IG1QkOdOkxX8kbdEqDBh7zOjLgdAOybdTQabNX';
    private redirect_uri = 'http://localhost:4200/';

    public defaultHeaders: Headers = new Headers();
    //public configuration: Configuration = new Configuration();
    private userData: models.LoginData;
    subscription;

    constructor(public http: CustomHttp, private apiConst: APIConstants) {
        this.OauthLoginEndPointUrl = this.apiConst.AUTHURL;
        this.tokenUrl = this.apiConst.TOKENURL;
    }



    getAccessToken(username, password) {
        
        this.userData = new models.LoginData;
        this.userData.grantType = "password";
        this.userData.clientId = this.clientId;
        this.userData.clientSecret = this.clientSecret;
        this.userData.username = username;
        this.userData.password = password;
        
        return this.apiLoginWithHttpInfo(this.userData)
            .map(this.handleData)
            .catch(this.handleError);
    }


    private handleData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: any) {
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


    /**
     * login to system
     * login
     * @param userLoginData user Login Data
     */
    public apiLoginWithHttpInfo(userLoginData: models.LoginData, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.tokenUrl;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userLoginData' is not null or undefined
        if (userLoginData === null || userLoginData === undefined) {
            throw new Error('Required parameter userLoginData was null or undefined when calling apiLogin.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        headers.set('Accept', 'application/json'); 

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: userLoginData == null ? '' : userLoginData, // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any> Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
