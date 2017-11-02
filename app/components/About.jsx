let React = require('react');

let About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a React app.</p>
			<p>Here are some of the tools used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - JavaScript Framework
				</li>
				<li>
					<a href="https://openweathermap.org">Open Weather Map</a> - API to search for the weather
				</li>
			</ul>
		</div>
	);
};

module.exports = About;