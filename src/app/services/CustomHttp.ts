/*
 *    Project:	iHreg-Fontend-UI - iHreg-Fontend-UI
 *    Version:	1.0.0
 *    Date:		Jul 22, 2017 3:17:07 PM
 *    Author:	mohammedzaki
 *
 *    Coded with Netbeans!
 */


import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {BaThemeSpinner} from '../theme/services';


@Injectable()
export class CustomHttp extends Http {

    private _spinner: BaThemeSpinner;
    constructor(backend: XHRBackend, options: RequestOptions) {
        super(backend, options);
        this._spinner = new BaThemeSpinner();
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        this._spinner.showComponentPreloader();
        return super.request(url, options).map((response: Response) => {
            this._spinner.hideComponentPreloader(2000);
            return response;
        }).catch(this.catchAuthError(this));
    }

    private catchAuthError(self: CustomHttp) {
        // we have to pass HttpService's own instance here as `self`
        return (res: Response) => {
            console.log(res);
            this._spinner.hideComponentPreloader(2000);
            return Observable.throw(res);
        };
    }

}
