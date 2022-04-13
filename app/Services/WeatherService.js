import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { api } from "./AxiosService.js"
class WeatherService {

    async getWeather() {
        const res = await api.get('weather')
        console.log('weather', res.data)
        ProxyState.weather = new Weather(res.data)
        console.log(ProxyState.weather)
    }
}

export const weatherService = new WeatherService()