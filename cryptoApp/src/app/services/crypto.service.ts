/*** 
 Servicio que maneja la comunicación con la API de criptomonedas
***/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
 
  // private apiUrl = 'http://localhost:8000/cryptos'; // URL base del backend
  private apiUrl = 'https://api-coinmarketcap.onrender.com/cryptos'; // URL base del backend PRODUCCION

  constructor(private http: HttpClient) { }

  // Obtener la lista de criptomonedas
  getCryptos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Obtener una criptomoneda por su ID
  getCryptoById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
