const express = require('express');
const morgan = require('morgan');

// Routes
const bestSellerRouter = require('./routes/bestSellerRouter');
const camerasRouter = require('./routes/camerasRouter');
const tvAndVideosRouter = require('./routes/TVAndVideosRouter');
const audioRouter = require('./routes/audioRouter');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes handler
app.use('/api/v1/categories/best-sellers', bestSellerRouter);
app.use('/api/v1/categories/cameras', camerasRouter);
app.use('/api/v1/categories/tv-videos', tvAndVideosRouter);
app.use('/api/v1/categories/audios', audioRouter);

module.exports = app;
