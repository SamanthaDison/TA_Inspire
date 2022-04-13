import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _drawWeather() {
    let weather = ProxyState.weather
    let isFahrenheit = ProxyState.isFahrenheit
    document.getElementById('icon').src = weather.icon
    if (isFahrenheit) {
        document.getElementById('temperature').innerText = weather.Fahrenheit + 'F'
        return
    }
    document.getElementById('temperature').innerText = weather.Celsius + 'C'

}
export class WeatherController {
    constructor() {
        console.log('weather controller');
        weatherService.getWeather()
        ProxyState.on('weather', _drawWeather)
        ProxyState.on('isFahrenheit', _drawWeather)
    }

    // TODO get toggle temperature function working
    switchTemperature() {
        // debugger
        console.log('switch temp')
        weatherService.switchTemperature()
    }

}