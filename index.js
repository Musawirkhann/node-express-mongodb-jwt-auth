'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const environements = require('./environements');
const userRoutes = require('./routes/user-routes');
const authRoutes = require('./routes/auth-routes');
const bookRoutes = require('./routes/book-routes');
const error = require('./middleware/error');
const winston = require('winston');
const app = express();

require('./startup/config')();
require('./startup/db')();
require('./startup/logging')();
require('./startup/validation')();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);
app.use('/api', authRoutes.routes);
app.use('/api', bookRoutes.routes);
app.use(error);

app.listen(environements.port, () => winston.info('App listening on url: http://localhost:' + environements.port));