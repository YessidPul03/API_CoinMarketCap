# API_CoinMarketCap

a REST API that exposes the cryptocurrency data obtained.

Este proyecto es una aplicación web desarrollada con Angular/Ionic para el frontend y FastAPI para el backend. Permite consultar las 10 criptomonedas principales con sus respectivos precios y detalles, consumiendo una API simulada localmente

## Technologies used

**Frontend:** _Angular_, _Ionic_, _TypeScript_

**Backend:** FastAPI (_Python_)

## Intall

Descarga el proyecto en formato .zip, o en su defecto tambien puedes clonar el repositorio:
**CLON:**
`git clone https://github.com/YessidPul03/API_CoinMarketCap`
`cd API_CoinMarketCap`

# Config Backend

1. Navega a la carpeta de la API:
   `cd envApi-Back`
2. Crea un entorno Virtual:
   `python -m venv crypto-env`
3. Activa el entorno Virtual:
   - **Windows:** `cd crypto-env\Scripts\activate`
   - **Linux/mcOS:** `source crypto-env/bin/activate`
4. Instala las Dependencias:
   `pip install -r requirements.txt`
5. Ejecuta el servidor de Desarrollo:
   `uvicorn main:app --reload`
6. La API estara disponible en:
   _http://localhost:8000/cryptos_
   - Consulta de Criptomonedo por ID:
     _http://localhost:8000/cryptos/1_

# Config Frontend

1. Navega a la carpeta del Frontend:
   `cd ../cryptoApp`
2. Intala las depenencias:
   `npm install`
3. Ejecuta la aplicacion:
   `ionic serve`
4. La aplicacion estara disponible en:
   _http://localhost:8100_
