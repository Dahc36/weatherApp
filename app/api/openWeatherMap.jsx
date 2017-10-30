let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=7bc16b6f60875ef6cf91393971c64c2e&units=metric';

function getTemp(location){
	let encodedLocation = encodeURIComponent(location);
	let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

	return axios.get(requestUrl).then(function(data){
		if(data.data.cod && data.data.message){
			throw new Error(data.data.message);
		} else {
			return data.data.main.temp;
		}
	}, function(error){
		throw new Error(error);
	});
}

module.exports = {
	getTemp: getTemp
};