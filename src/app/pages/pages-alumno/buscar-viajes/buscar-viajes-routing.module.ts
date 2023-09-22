import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarViajesPage } from './buscar-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarViajesPageRoutingModule {}
