let React = require('react');

let WeatherMessage = (props) => {
	let {location, temp} = props;
	return (
		<div>
			<h3>It's {temp} in {location}!</h3>
		</div>
	);
};

module.exports = WeatherMessage;