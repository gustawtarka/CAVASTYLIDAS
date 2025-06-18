  'use strict';

import express from 'express';

//--------------------------------------------- Create a router object
const router = express.Router();

//--------------------------------------------- Import all the necessary controllers
import about from './controllers/about.js';
import index from './controllers/index.js';
import products from './controllers/products.js';


//--------------------------------------------- Set up paths to different pages
router.get('/', index.createView);
router.get('/about', about.createView);
router.get('/products', products.createView);

//--------------------------------------------- Set up an error message in case the page that is to be routed to doesnt exist
router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
