const express = require('express');
const webpack = require('webpack');
const app = express();
let router = express.Router();
const path = require('path');

function getConfig() {
    switch(process.env.NODE_ENV){
        case 'development':
            return {
                port: 3000,
                contextRoot: '/viking'
            };
    }
}

const conf = getConfig();


app.use(express.static(__dirname));


app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, '', 'index.html'))
});

const server = app.listen(conf.port, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});