class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.feelslike = document.getElementById('w-feels-like');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${weather.main.temp} degrees C`;
    this.feelslike.textContent = `Feels like: ${weather.main.feels_like}`;
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} mb`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed} km/h`;
  }
}