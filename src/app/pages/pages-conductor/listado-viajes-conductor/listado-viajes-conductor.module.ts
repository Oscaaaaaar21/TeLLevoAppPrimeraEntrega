import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoViajesConductorPageRoutingModule } from './listado-viajes-conductor-routing.module';

import { ListadoViajesConductorPage } from './listado-viajes-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoViajesConductorPageRoutingModule
  ],
  declarations: [ListadoViajesConductorPage]
})
export class ListadoViajesConductorPageModule {}
