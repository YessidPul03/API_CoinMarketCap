import os
from requests import Session, RequestException
from dotenv import load_dotenv

# Cargar las variables de entorno desde .env
load_dotenv()

# Clase para consumir la API de CoinMarketCap
class CryptoService:
    def __init__(self): # Constructor
        self.api_url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest' # URL de la API
        self.api_key = os.getenv("CMC_API_KEY") # API key de CoinMarketCap (.env)
        self.session = Session() # Crear una sesión para hacer peticiones HTTP
        self.session.headers.update({ # Configurar los headers de la petición
            'Accepts': 'application/json',
            'X-CMC_PRO_API_KEY': self.api_key,
        })
        self.cryptos = [] # Lista de criptomonedas

    # Método para obtener las criptomonedas
    def fetch_cryptos(self):
        parameters = { # Parámetros de la petición
            'start': '1',
            'limit': '10',  # Solo las 10 principales
            'convert': 'USD'
        }
        # Hacer la petición a la API
        try:
            response = self.session.get(self.api_url, params=parameters) # Hacer la petición GET
            response.raise_for_status() # Verificar si hubo un error en la petición
            self.cryptos = response.json().get('data', []) # Guardar las criptomonedas en la lista
        except RequestException as e: # Capturar errores de la petición
            print(f"Error al consumir la API: {e}")

    # Método para obtener todas las criptomonedas
    def get_all_cryptos(self):
        return self.cryptos # Devolver la lista de criptomonedas

    # Método para obtener una criptomoneda por su id
    def get_crypto_by_id(self, crypto_id):
        return next((crypto for crypto in self.cryptos if str(crypto['id']) == crypto_id), None) # Buscar la criptomoneda por su id
