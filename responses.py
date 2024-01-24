from random import choice, randint

def get_response(user_input: str) -> str:
    lowered: str = user_input.lower()

    if lowered == '':
        return 'Tas calladito eh..'
    elif 'hola' in lowered:
        return 'Holo :)'
    elif 'dado 20' in lowered:
        return f'Has sacado un: {randint(1, 20)}'
    else:
        return choice(['Algo esta mal',
                       'No te he entendido, vuelve a probar',
                       'Estas tonto o que, escribe algo que entienda'])