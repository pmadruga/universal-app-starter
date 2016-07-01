'use strict';
const express = require('express');
const app = require('express')();
const compression = require('compression');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require('node-jsx').install({ harmony: true });

const Component = require('../shared/components/Component.js');

app.use(compression());

const listener = app.listen(process.env.PORT || 8888, () => {
  console.log(`server running on ${listener.address().port}`);
});


app.get('/', function(req, res, next) {
  console.log(Component);
  res.send(Component);
})
