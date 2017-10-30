let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		};
	},
	handleSearch: function(location){
		let that = this;
		this.setState({isLoading: true});
		openWeatherMap.getTemp(location).then(function(data){
			that.setState({
				location: location,
				temp: data,
				isLoading: false
			});
		}, function(error){
			console.log(error);
			that.setState({isLoading: false});
		});
	},
	render: function(){
		let {location, temp, isLoading} = this.state;

		function renderMessage(){
			if (isLoading) {
				return <h3>Loading...</h3>;
			} else if(location && temp){
				return <WeatherMessage location={location} temp={temp}/>;
			} else {
				return <h3>Error!</h3>
			}
		}

		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;