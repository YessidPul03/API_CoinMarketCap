from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from services.crypto_service import CryptoService
import asyncio

app = FastAPI()
crypto_service = CryptoService()

# Habilitar CORS para permitir que el frontend acceda
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Tarea de actualización periódica
async def update_cryptos_periodically():
    while True:
        crypto_service.fetch_cryptos()
        await asyncio.sleep(300)  # Actualiza cada 5 minutos

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(update_cryptos_periodically())

# Endpoints de la API
# endpoint para obtener todas las criptomonedas
@app.get("/cryptos")
async def get_cryptos():
    cryptos = crypto_service.get_all_cryptos() 
    if cryptos:
        return cryptos
    raise HTTPException(status_code=404, detail="No se encontraron criptomonedas.") # Cambiar el mensaje de error

# endpoint para obtener una criptomoneda por su id
# Ejemplo de uso: /cryptos/1
@app.get("/cryptos/{crypto_id}")
async def get_crypto(crypto_id: str):
    crypto = crypto_service.get_crypto_by_id(crypto_id)
    if crypto:
        return crypto
    raise HTTPException(status_code=404, detail="Criptomoneda no encontrada")
