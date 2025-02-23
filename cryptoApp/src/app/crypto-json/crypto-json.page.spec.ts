/***
  Pruebas unitarias para CryptoJsonPage
***/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CryptoJsonPage } from './crypto-json.page';
import { CryptoService } from '../services/crypto.service';

describe('CryptoJsonPage', () => {
  let component: CryptoJsonPage; // Componente a probar
  let fixture: ComponentFixture<CryptoJsonPage>; // Fixture para el componente y sus dependencias
  let cryptoServiceSpy: jasmine.SpyObj<CryptoService>; // Mock del servicio de criptomonedas

  // Configuración de las pruebas
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CryptoService', ['getCryptoById']); // Creación del mock del servicio de criptomonedas

    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [CryptoJsonPage], // Componente a probar
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } },
        { provide: CryptoService, useValue: spy }
      ]
    }).compileComponents(); // Compilación de las pruebas

    // Creación del componente a probar
    fixture = TestBed.createComponent(CryptoJsonPage);
    component = fixture.componentInstance; // Instancia del componente
    cryptoServiceSpy = TestBed.inject(CryptoService) as jasmine.SpyObj<CryptoService>; // Inicialización del mock
  });

  // Prueba de creación del componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba de carga de detalles de criptomoneda por ID
  it('should load crypto details by ID', () => {
    const mockCrypto = { id: 1, name: 'Bitcoin', symbol: 'BTC' };
    cryptoServiceSpy.getCryptoById.and.returnValue(of(mockCrypto)); // espía del método getCryptoById

    component.ngOnInit(); // Inicialización del componente

    expect(component.crypto).toEqual(mockCrypto); // Verificación de que los detalles de la criptomoneda se cargaron correctamente
  });
});
