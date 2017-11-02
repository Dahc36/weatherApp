let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');
let ErrorModal = require('ErrorModal');

let Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		};
	},
	handleSearch: function(location){
		this.setState({
			isLoading: true,
			error: undefined
		});
		let that = this;
		openWeatherMap.getTemp(location).then(function(data){
			that.setState({
				location: location,
				temp: data,
				isLoading: false
			});
		}, function(error){
			// console.log(error);
			that.setState({
				isLoading: false,
				error: error.message
			});
		});
	},
	render: function(){
		let {location, temp, isLoading, error} = this.state;

		function renderMessage(){
			if (isLoading) {
				return <h3 className="text-center">Loading...</h3>;
			} else if(location && temp){
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		function renderError(){
			if (error !== undefined) {
				return <ErrorModal message={error}/>;
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;