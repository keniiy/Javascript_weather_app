class Forecast{
    constructor(){
        this.key = 'HeSbqo0G1L56DLxlkyfMyAGrG2fRCaq1';
        this.WeatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
        return { cityDetails, weather };
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`
        const response = await fetch(this.WeatherURI + query);
        const data = await response.json();
    
        return data[0];
    }
}



// Get weather information
const getWeather = async (id) => {
    
};

// get city information
const getCity = async (city) => {

};

