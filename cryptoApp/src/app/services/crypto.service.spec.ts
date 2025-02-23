/***
  Pruebas unitarias para CryptoService
***/
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CryptoService } from './crypto.service';

describe('CryptoService', () => {
  let service: CryptoService; // Instancia del servicio
  let httpMock: HttpTestingController; // Mock del controlador de solicitudes HTTP

  // Configuración de las pruebas
  beforeEach(() => {
    TestBed.configureTestingModule({ // Configuración del módulo de pruebas
      imports: [HttpClientTestingModule], // Importa el módulo de pruebas para HTTP
      providers: [CryptoService], // Servicios a inyectar
    });

    service = TestBed.inject(CryptoService); // Instancia el servicio
    httpMock = TestBed.inject(HttpTestingController); // Inicializa el controlador de solicitudes HTTP
  });

  // Limpieza de las pruebas
  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  // Prueba para verificar que el servicio se haya creado
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Prueba para obtener la lista de criptomonedas
  it('should fetch a list of cryptos', () => {
    const mockData = [
      { id: 1, name: 'Bitcoin', symbol: 'BTC' },
      { id: 2, name: 'Ethereum', symbol: 'ETH' }
    ];
   
    // Se suscribe al servicio y verifica que la respuesta sea la esperada
    service.getCryptos().subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockData);
    });
    
    // Se espera una solicitud GET a la URL especificada y se responde con los datos de prueba
    const req = httpMock.expectOne('http://localhost:8000/cryptos');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  // Prueba para obtener los detalles de una criptomoneda por su ID
  it('should fetch crypto details by ID', () => {
    const mockCrypto = { id: 1, name: 'Bitcoin', symbol: 'BTC' };

    service.getCryptoById('1').subscribe((data) => {
      expect(data.id).toBe(1);
      expect(data.name).toBe('Bitcoin');
    });

    const req = httpMock.expectOne('http://localhost:8000/cryptos/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockCrypto);
  });

  // Prueba para manejar errores cuando la API falla
  it('should handle errors when API fails', () => {
    service.getCryptos().subscribe(
      () => fail('Expected an error, but got a successful response'),
      (error) => {
        expect(error.status).toBe(500);
      }
    );

    // Se espera una solicitud GET a la URL especificada y se responde con un error
    const req = httpMock.expectOne('http://localhost:8000/cryptos');
    req.flush('Error fetching data', { status: 500, statusText: 'Server Error' });
  });
});
