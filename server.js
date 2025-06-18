'use strict';

import express from 'express';
import logger from "./utils/logger.js";
import routes from './routes.js'; 
import { create } from 'express-handlebars';
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false, }));

const handlebars = create({
  extname: '.hbs',
});
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/", routes);
app.listen(port, () => logger.info(`Your app is listening on port ${port}`));
