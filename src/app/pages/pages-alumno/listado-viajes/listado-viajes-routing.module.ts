import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoViajesPage } from './listado-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoViajesPageRoutingModule {}
