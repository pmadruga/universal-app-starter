const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Component = React.createClass({
	render() {
		return (<h1>hello world</h1>)
	}
});

module.exports = ReactDOMServer.renderToString(<Component />);
