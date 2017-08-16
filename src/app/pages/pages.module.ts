import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {routing} from './pages.routing';
import {NgaModule} from '../theme/nga.module';
import {AppTranslationModule} from '../app.translation.module';

import {Pages} from './pages.component';
import {CustomHttpFactory} from "app/services/CustomHttpFactory";
import {CustomHttp} from 'app/services/CustomHttp';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {Helpers} from "app/helpers/helpers";
import {APIConstants} from "app/helpers/Constants/const-apis";
import {AlreadyLoginGuard} from "app/guard/AlreadyLoginGuard";
import {CanActivateViaOAuthGuard} from "app/guard/oAuth.canActivateGuard";
import {LoginService} from "app/services/login.service";
import {MessageComponent} from "app/helpers/message-com/message.component";
import {NgUploaderModule} from "ngx-uploader";
import {LoginModule} from "app/pages/login/login.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataTableModule} from "angular2-datatable";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EventsApi} from "app/services/EventsApi";
import {CompanyApi, EventStandApi} from "app/services/api";

@NgModule({
    imports: [
        CommonModule,
        AppTranslationModule,
        NgaModule,
        routing,
        FormsModule,
        Ng2SmartTableModule,
        DataTableModule,
        HttpModule,
        NgbModule,
        ReactiveFormsModule,
        LoginModule,
        NgUploaderModule,
    ],
    declarations: [
        Pages,
        MessageComponent,
    ],
    providers: [
        LoginService,
        EventsApi,
        CompanyApi,
        EventStandApi,
        CanActivateViaOAuthGuard,
        AlreadyLoginGuard,
        APIConstants,
        Helpers,
        {
            provide: CustomHttp,
            useFactory: CustomHttpFactory,
            deps: [XHRBackend, RequestOptions]
        }
    ],
})


export class PagesModule {
}
