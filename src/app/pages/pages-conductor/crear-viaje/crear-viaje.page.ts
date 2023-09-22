import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-crear-viaje', // Asegúrate de que el selector sea correcto
  templateUrl: 'crear-viaje.page.html',
  styleUrls: ['crear-viaje.page.scss'], // Si tienes estilos específicos para esta página
})
export class CrearViajePage { // Asegúrate de que el nombre de la clase sea correcto

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Perfil',
        handler: () => {
          // Lógica para la opción Perfil
        }
      }, {
        text: 'Crear Viaje',
        handler: () => {
          // Lógica para la opción Crear Viaje
        }
      }, {
        text: 'Listado de Viajes',
        handler: () => {
          // Lógica para la opción Listado de Viajes
        }
      }, {
        text: 'Cartera',
        handler: () => {
          // Lógica para la opción Cartera
        }
      }, {
        text: 'Métodos de Pago',
        handler: () => {
          // Lógica para la opción Métodos de Pago
        }
      }, {
        text: 'Cancelar',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

}
