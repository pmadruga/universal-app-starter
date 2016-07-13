'use strict';

/* Dependencies */
const express = require('express');
const Server = require('express')();
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');

// Node needs to interpret react,
// and the node-jsx only works when in index.server.js
require('node-jsx').install();

/* Paths */
const ROOTDIR = process.cwd();

/* Modules */
const routes = require('./routes/index.routes.server.js')(Server, ROOTDIR);

// Booting up the server
const listener = Server.listen(process.env.PORT || 8888, () => {
	console.log(`🌎  ::  Backoffice Server :: running on ${listener.address().port}`);
});

/* Configuration of the server */
Server.use(compression());
Server.use(bodyParser.json());
