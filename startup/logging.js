'use strict';
const winston  = require('winston');
require('express-async-errors');

module.exports = () => {
    process.on('uncaughtException', (ex) => {
        winston.error(ex.message, ex);
        process.exit(1);
    });
    process.on('unhandledRejection', (ex) => {
        winston.error(ex.message, ex);
        process.exit(1);
    });

    winston.add(winston.transports.File, {filename: 'logfile.log'});
}