/*** 
 Componente que maneja la que maneja la lista de criptomonedas
***/
import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { ModalController } from '@ionic/angular';
import { CryptoDetailsPage } from '../crypto-details/crypto-details.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  cryptos: any[] = []; // Lista de criptomonedas

  // Inyecta el servicio CryptoService y el controlador de modales
  constructor(private cryptoService: CryptoService,
    private modalController: ModalController
  ) {}

  // Carga las criptomonedas al inicializar
  ngOnInit() {
    this.loadCryptos();
  }

  // Carga las criptomonedas
  loadCryptos() {
    this.cryptoService.getCryptos().subscribe((data) => { // Obtiene las criptomonedas
      this.cryptos = data; // Asigna las criptomonedas a la lista
    });
  }

  // Muestra los detalles de una criptomoneda
  async viewDetails(id: string) {
    this.cryptoService.getCryptoById(id).subscribe(async (data) => { // Obtiene la criptomoneda por su ID
      const modal = await this.modalController.create({ // Crea un modal
        component: CryptoDetailsPage, // Componente que se mostrará en el modal
        componentProps: {
          crypto: data // Propiedades que se enviarán al componente
        },
        cssClass: 'crypto-modal' // Clase CSS personalizada para animación del modal (global.scss)
      });
  
      // Muestra el modal
      await modal.present();
    });
  }

}
