/***
  Pruebas unitarias para CryptoDetailsPage
***/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoDetailsPage } from './crypto-details.page';
import { IonicModule, ModalController } from '@ionic/angular';

describe('CryptoDetailsPage', () => {
  let component: CryptoDetailsPage; // Componente a probar
  let fixture: ComponentFixture<CryptoDetailsPage>; // Fixture para el componente

  // Configuración de las pruebas
  beforeEach(async () => {
    await TestBed.configureTestingModule({ // Configuración del módulo de pruebas
      imports: [IonicModule.forRoot()], // Importación de módulos necesarios
      declarations: [CryptoDetailsPage], // Componente a probar
      providers: [ModalController] // Proveedor necesario para los modales
    }).compileComponents(); // Compilación de las pruebas

    // Creación del componente a probar
    fixture = TestBed.createComponent(CryptoDetailsPage);
    component = fixture.componentInstance; // Instancia del componente

    // Mock completo con la estructura de un objeto Crypto
    component.crypto = {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      quote: {
        USD: {
          price: 50000,
          percent_change_24h: 1.5
        }
      }
    };

    // Detección de cambios
    fixture.detectChanges();
  });

  // Prueba de creación del componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba de cierre de modal
  it('should toggle JSON view', () => {
    expect(component.showJson).toBeFalse(); // Verificación de que el JSON NO se muestra
    component.toggleJsonView(); // Llamada al método para mostrar el JSON
    expect(component.showJson).toBeTrue(); // Verificación de que el JSON SI se muestra
  });
});
