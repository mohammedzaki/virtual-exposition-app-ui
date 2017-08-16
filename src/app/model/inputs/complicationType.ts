import * as models from '../models';
import { Injectable } from '@angular/core';

@Injectable()
export class ComplicationType {
  public arthropathy: models.ComplicationArthropathy;
  public infections: models.ComplicationInfections;
  public inhibitors: models.ComplicationInhibitors;
  public others: models.ComplicationOthers;

  public types = [
    {id: 1, model: this.arthropathy},
    {id: 2, model: this.infections},
    {id: 3, model: this.inhibitors},
    {id: 4, model: this.others},
  ];

}

export const COMPLICATIONTYPES = [
  {id: 0, name: 'Select'},
  {id: 1, name:'Arthropathy'},
  {id: 2, name:'Infections'},
  {id: 3, name:'Inhibitors'},
  {id: 4, name:'others'},
];
