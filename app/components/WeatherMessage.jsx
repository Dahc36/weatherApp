let React = require('react');

let WeatherMessage = (props) => {
	let {location, temp} = props;
	return (
		<div>
			<h3 className="text-center">It's {temp}°C in {location}!</h3>
		</div>
	);
};

module.exports = WeatherMessage;