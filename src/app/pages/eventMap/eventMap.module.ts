import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';

import {routing} from './eventMap.routing';
import {EventMap} from './eventMap.component';
import {AgmCoreModule, LatLngBounds} from '@agm/core';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB4ugikzTkoQy0xcnNiBjZ05BZsTJg_Als'
        }),
        
    ],
    declarations: [
        EventMap
    ],
    providers: [

    ]
})
export class EventMapModule {}
