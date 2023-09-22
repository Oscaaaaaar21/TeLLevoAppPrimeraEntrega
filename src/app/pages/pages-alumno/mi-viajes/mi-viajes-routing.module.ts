import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiViajesPage } from './mi-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: MiViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiViajesPageRoutingModule {}
