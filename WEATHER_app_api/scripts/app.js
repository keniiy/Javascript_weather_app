const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img')
const forecast = new Forecast();

const updateUi = (data) => {
    
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    //destructure properties
    const {cityDetails, weather} = data;

    //Upate Template
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `
    //Update day and night icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // Ternary Operation
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    //Remove class of none display
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    };
};


cityForm.addEventListener('submit', e => {

    // Prevent event default action
    e.preventDefault();

    // Get City Value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    
    //Update with city information
    forecast.updateCity(city)
        .then(data => updateUi(data))
        .catch(err => console.log(err.messages));

    //set localStorage
    localStorage.setItem('city', city);
});

if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUi(data))
        .catch(err => console.log(err.messages));
};