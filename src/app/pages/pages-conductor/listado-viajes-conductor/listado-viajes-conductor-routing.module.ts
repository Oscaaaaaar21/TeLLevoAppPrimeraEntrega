import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoViajesConductorPage } from './listado-viajes-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoViajesConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoViajesConductorPageRoutingModule {}
