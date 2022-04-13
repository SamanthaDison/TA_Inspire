import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


let isFahrenheit = true
function _drawWeather() {
    let weather = ProxyState.weather
    document.getElementById('icon').src = weather.icon
    if (isFahrenheit = true) {
        document.getElementById('temperature').innerText = weather.Fahrenheit
        return
    }
    document.getElementById('temperature').innerText = weather.Celsius

}
export class WeatherController {
    constructor() {
        console.log('weather controller');
        weatherService.getWeather()
        ProxyState.on('weather', _drawWeather)
    }

    switchTemperature() {
        debugger
        console.log('switch temp')
        isFahrenheit = !isFahrenheit
        _drawWeather()
    }

}