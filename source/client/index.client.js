const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({

	render() {
		return (<div className="container row"> <h1>Hello World</h1><h2>This is client rendering</h2></div>);
	}
});

ReactDOM.render(<App />, document.getElementById('root'));
