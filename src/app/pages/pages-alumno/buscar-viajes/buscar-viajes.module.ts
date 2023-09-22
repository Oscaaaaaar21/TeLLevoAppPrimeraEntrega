import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarViajesPageRoutingModule } from './buscar-viajes-routing.module';

import { BuscarViajesPage } from './buscar-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarViajesPageRoutingModule
  ],
  declarations: [BuscarViajesPage]
})
export class BuscarViajesPageModule {}
