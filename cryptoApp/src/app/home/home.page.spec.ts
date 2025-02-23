/***
  Pruebas unitarias para HomePage
***/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { CryptoService } from '../services/crypto.service';
import { of } from 'rxjs';
import { IonicModule, ModalController } from '@ionic/angular';

describe('HomePage', () => {
  let component: HomePage; // Instancia del componente
  let fixture: ComponentFixture<HomePage>; // Envoltura del componente
  let cryptoServiceSpy: jasmine.SpyObj<CryptoService>; // Mock del servicio

  // Configuración de las pruebas
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CryptoService', ['getCryptos']); // Crea un mock del servicio

    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()], // Importar módulo de Ionic
      declarations: [HomePage],
      providers: [
        { provide: CryptoService, useValue: spy },
        ModalController  // Agregar el proveedor necesario
      ]
    }).compileComponents(); // Compila las plantillas y los estilos

    // Crea una instancia del componente y su envoltura
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    cryptoServiceSpy = TestBed.inject(CryptoService) as jasmine.SpyObj<CryptoService>; // Instancia el mock del servicio
  });

  // Prueba para verificar que el componente se haya creado
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba para cargar las criptomonedas al inicializar
  it('should load cryptos on init', () => {
    const mockCryptos = [{ id: 1, name: 'Bitcoin', symbol: 'BTC' }];
    cryptoServiceSpy.getCryptos.and.returnValue(of(mockCryptos)); // Espía el método getCryptos

    component.ngOnInit(); // Inicializa el componente

    // Verifica que las criptomonedas se hayan cargado correctamente
    expect(component.cryptos).toEqual(mockCryptos);
    expect(cryptoServiceSpy.getCryptos).toHaveBeenCalled();
  });
});
