class Weather {
  constructor(city, country) {
    this.apiKey = '7073b22318bb2da6fea328c1ace1873f';
    this.city = city;
    this.country = country;
  }


  // Fetching weather
  async getWeather() {
    const geo = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.country}&limit=1&appid=${this.apiKey}`);

    const geoData = await geo.json();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }

  // Change location
  changelocation(city, country) {
    this.city = city;
    this.country = country;
  }
}