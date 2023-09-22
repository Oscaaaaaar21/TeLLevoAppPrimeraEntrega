import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiViajesPageRoutingModule } from './mi-viajes-routing.module';

import { MiViajesPage } from './mi-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiViajesPageRoutingModule
  ],
  declarations: [MiViajesPage]
})
export class MiViajesPageModule {}
