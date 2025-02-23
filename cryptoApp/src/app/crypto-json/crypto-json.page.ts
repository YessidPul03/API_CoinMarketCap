/*** 
 Componente que maneja la vista de detalles de una criptomoneda
***/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-crypto-json',
  templateUrl: './crypto-json.page.html',
  styleUrls: ['./crypto-json.page.scss'],
  standalone: false,
})
export class CryptoJsonPage implements OnInit {
  crypto: any; // Recibe los datos de la criptomoneda

  // Constructor para inyectar el servicio de rutas y el servicio de criptomonedas
  constructor(private route: ActivatedRoute,
    private cryptoService: CryptoService) { }

    // Método para inicializar el componente
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtención del ID de la criptomoneda
    this.cryptoService.getCryptoById(id!).subscribe((data) => { // Obtención de la criptomoneda por ID
      this.crypto = data; // Asignación de la criptomoneda
    });
  }

}
