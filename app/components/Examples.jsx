let React = require('react');
let {Link} = require('react-router');

let Examples = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few examples you can try out.</p>
			<ol>
				<li>
					<Link to="/?location=Philadelphia">Philadelphia</Link>
				</li>
				<li>
					<Link to="/?location=Santiago">Santiago</Link>
				</li><li>
					<Link to="/?location=London">London</Link>
				</li><li>
					<Link to="/?location=Lima">Lima</Link>
				</li><li>
					<Link to="/?location=Seoul">Seoul</Link>
				</li><li>
					<Link to="/?location=La Florida">La Florida</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;