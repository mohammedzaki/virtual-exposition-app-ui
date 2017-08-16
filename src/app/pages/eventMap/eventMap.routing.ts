import { Routes, RouterModule }  from '@angular/router';

import { EventMap } from './eventMap.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: EventMap
  }
];

export const routing = RouterModule.forChild(routes);
