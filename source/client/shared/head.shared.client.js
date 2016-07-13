const React = require('react');
const Head = React.createClass({
	render() {
		return (
			<head>
				<meta name="viewport" content="width=device-width" />
				<meta charSet="UTF-8" />
				<meta name="description" content="" />
				<meta name="keywords" content="" />
				<title>Universal starter pack</title>
				<link href="public/styles/bootstrap_v4.css" rel="stylesheet" type="text/css" />
			</head>
        );
	}
});

module.exports = Head;
