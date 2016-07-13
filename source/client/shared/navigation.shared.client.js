const React = require('react');

const navigation = React.createClass({
	render() {
		return (
			<header>
                <nav className="navbar navbar-full navbar-light bg-faded">
                  <a className="navbar-brand" href="#">Universal starter pack</a>
                </nav>
            </header>
		);
	}
});

module.exports = navigation;
