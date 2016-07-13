'use strict';
const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');


const ROOTDIR = process.cwd();

const Head = React.createFactory(require(ROOTDIR + '/source/client/shared/head.shared.client.js'));
const Navigation = React.createFactory(require(ROOTDIR + '/source/client/shared/navigation.shared.client.js'));

module.exports = (Server, ROOTDIR) => {
    Server.get('/', (req, res, next) => {
        res.send(
            ReactDOMServer.renderToString(
                <html>
                    <Head />
                    <body>
                        <div className="frontpage">
                            <Navigation />
                            
                            <div id="root"></div>

                        </div>

                        <script src="public/bundled.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" crossOrigin="anonymous"></script>
                    </body>
                </html>
            )
        );
    });

    Server.use('/', express.static(path.join(__dirname, '../../client/')));
};
