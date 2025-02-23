/*** 
 Componente que maneja la vista de detalles de una criptomoneda
***/
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.page.html',
  styleUrls: ['./crypto-details.page.scss'],
  standalone: false,
})
export class CryptoDetailsPage {
  @Input() crypto: any;  // Recibe los datos de la criptomoneda
  showJson = false;  // Estado para alternar vistas

  // Constructor para inyectar el controlador de modales
  constructor(private modalController: ModalController) { }

  // Método para cerrar el modal
  closeModal() {
    this.modalController.dismiss();
  }

  // Método para alternar la vista JSON
  toggleJsonView() {
    this.showJson = !this.showJson;
  }
}
