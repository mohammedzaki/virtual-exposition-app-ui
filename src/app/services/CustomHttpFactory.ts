/*
 *    Project:	iHreg-Fontend-UI - iHreg-Fontend-UI
 *    Version:	1.0.0
 *    Date:		Jul 23, 2017 4:28:22 AM
 *    Author:	mohammedzaki 
 *
 *    Coded with Netbeans!
 */

import {XHRBackend, RequestOptions} from "@angular/http/http";
import {CustomHttp} from "app/services/CustomHttp";

export function CustomHttpFactory (backend: XHRBackend, options: RequestOptions) {
    return new CustomHttp(backend, options);
}