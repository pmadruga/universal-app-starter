'use strict';
const webpack = require('webpack');

module.exports = [{

    name: 'Backoffice :: Client-side ',
    entry: './source/client/index.client.js',
    output: {
        filename: "bundled.js",
        path: "./source/client/public"
    },
    module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}];
