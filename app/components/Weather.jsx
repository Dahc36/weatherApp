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
				return <h3 className="text-center">Loading...</h3>;
			} else if(location && temp){
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;