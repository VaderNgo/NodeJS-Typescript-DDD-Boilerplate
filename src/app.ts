require("module-alias/register");
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";

import { mongoConnection } from "@infrastructure/mongoose";
import { sessionOptions } from "@infrastructure/redis";

const app: Application = express();

//Connect MongoDB
mongoConnection();

//Session
app.use(session(sessionOptions));

//Swagger

//Cors
const { corsOptions } = require("./config/cors");
app.use(cors());

//Basic middlewares
app.use(morgan("dev"));
app.use(express.json());

app.all("*", (req, res) => {
    res.status(404).json({
        error: {
            code: "NOT_FOUND",
            message: "No api route found with this path.",
        },
    });
});

export default app;
