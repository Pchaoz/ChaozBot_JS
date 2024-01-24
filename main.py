from typing import Final
import os
from dotenv import load_dotenv
from discord import Intents, Client, Message
from responses import get_response

#CARGAR EL DOTENV Y EL TOKEN
load_dotenv()
TOKEN: Final[str] = os.getenv('DISCORD_TOKEN')

#CONECTAR EL BOT
Intents: Intents = Intents.default()
Intents.message_content = True  #No quailty asurance
client: Client = Client(intents=Intents)

#FUNCIONALIDAD MENSAJES
async def send_message(message: Message, user_message: str) -> None:
    if not user_message:
        print('EL MENSAJE ESTA VACIO, PROBABLEMENTE LOS INTENTS NO ESTAN ACTIVADOS CORRECTAMENTE')
        return
    
    if is_private:= user_message[0] == '?':
        user_message = user_message[1:]

    try:
        response: str = get_response(user_message)
        await message.author.send(response) if is_private else await message.channel.send(response)
    except Exception as e:
        print(e)

#AHORA SI, HANDLE PARA CONECTAR EL BOT
@client.event
async def on_ready() -> None:
    print(f'{client.user} ta en marcha ahora')


#TRAGARSE LOS MENSAJES QUE LE ENTRAN
@client.event
async def on_message(message: Message) -> None:
    if message.author == client.user:
        return
    
    username: str = str(message.author)
    user_message: str  (message.message_content)
    channel: str = str (message.channel)
    print(f'[{channel}] {username}: "{user_message}"')

    await send_message(message, user_message)

#MAIN FUNCTION
def main() -> None:
    client.run(token=TOKEN)


if __name__ == '__main__':
    main()