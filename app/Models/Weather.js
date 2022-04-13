// for this model need url for openweathermap and interpolate the icon from the api in the url
export class Weather {
    constructor(data) {
        this.Fahrenheit = Math.round((data.main.temp -= 273.15) * 9 / 5 + 32)
        this.Celsius = data.main.temp -= 273.15
        this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }

    get Temmplate() {
        return `  <div class=" d-flex align-items-center">
              <img class="weather-icon" src="${this.icon}" alt="weather icon">
              <p class="m-0 fs-3">${this.Fahrenheit}&deg;</p>
            </div>
            <p class="ps-5">Boise</p>`
    }
}