import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoViajesPageRoutingModule } from './listado-viajes-routing.module';

import { ListadoViajesPage } from './listado-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoViajesPageRoutingModule
  ],
  declarations: [ListadoViajesPage]
})
export class ListadoViajesPageModule {}
