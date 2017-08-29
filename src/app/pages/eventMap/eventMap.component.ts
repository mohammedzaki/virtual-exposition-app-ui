import {Component, ElementRef} from '@angular/core';
import {EventsApi} from "app/services/api";
import {APIConstants} from "app/helpers/Constants/const-apis";
import {ExpositionEvent} from "app/model/models";
import {google} from "@agm/core/services/google-maps-types";
import {MapsAPILoader, LatLngLiteral, LatLngBoundsLiteral} from "@agm/core";

@Component({
    selector: 'event-map',
    styleUrls: ['./eventMap.scss'],
    templateUrl: './eventMap.html',
})
export class EventMap {

    data = [];
    expositionEvents: ExpositionEvent[];
    filterQuery;
    subscription;
    rowsOnPage = 10;
    sortBy = 'email';
    sortOrder = 'asc';
    title: string = 'My first AGM project';
    lat: number = 85;
    lng: number = 180;
    latLngBounds;

    constructor(
        private _elementRef: ElementRef,
        private eventsApi: EventsApi,
        private apiConst: APIConstants,
        private mapsAPILoader: MapsAPILoader) {
        
        this.mapsAPILoader.load().then(() => {
            this.latLngBounds = <LatLngBoundsLiteral>{west: 5, north: -5, south: -11, east: -11};
        });
    }

    ngOnInit() {
        this.subscription = this.eventsApi.getAllOpenedEvents().subscribe(data => {
            console.log(data);

            if (data.success && data.returnObject !== null) {
                this.expositionEvents = data.returnObject;
            } else {
                console.log(data.message);
            }
        });
    }
}
