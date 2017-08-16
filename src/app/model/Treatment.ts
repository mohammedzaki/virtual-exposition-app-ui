/**
 * iHRegistry
 * iHRegistry APIs
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mohammed.zaki@eye-ltd.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export class Treatment {
    id?: number;

    treatmentRegimen?: number;

    typeOfTreatment?: number;

    drugName?: string;

    productLotNumber?: number;

    plateletCount?: string;

    startDate?: Date;

    stopDate?: Date;

    doseUnitkg?: number;

    doseFrequencyDay?: number;

    doseFrequencyWeek?: number;

    reasonForTreatment?: string;

    otherOption?: string;

    lotNumber?: string;

    patientId?: number;

    userId?: number;

}
