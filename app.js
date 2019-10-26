import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './api/routes';
import usersRouter from './api/routes/users';


const index = express();

index.use(logger('dev'));
index.use(express.json());
index.use(express.urlencoded({ extended: false }));
index.use(cookieParser());
// index.use(express.static(path.join(__dirname, 'api')));

index.get('/', indexRouter);
index.get('/users', usersRouter);

module.exports = index;
