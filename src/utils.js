export const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32

export async function getTemperature(id) {
    const API_KEY = 'aebf87bc58f9c235864c7139afc8000c',
          URL_BASE = 'http://api.openweathermap.org/data/2.5/weather?'

    const weatherObj = await fetch(`${URL_BASE}id=${id}&units=metric&appid=${API_KEY}`).then(res => res.json())

    return weatherObj.main.temp
}
