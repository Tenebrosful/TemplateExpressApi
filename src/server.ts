import * as express from "express";

import * as bodyParser from "body-parser";
import logger from "./middleware/logger";

import error400 from "./errors/error400";
import error500 from "./errors/error500";

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(logger);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Handle Errors
 */

app.use(error400);
app.use(error500); // Must be on last position

app.listen(port, () => {
    console.log("PORT " + process.env.EXPRESS_PORT);
    console.log(`Server started at port http://localhost:${port}`);
});
