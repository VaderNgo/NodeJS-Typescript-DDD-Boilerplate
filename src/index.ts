import "./env";
import fs from "fs";
import app from "./app";
import http from "http";
import https from "https";

const PORT = process.env.PORT;
const ENV = process.env.ENV || "DEVELOPMENT";

if (ENV === "PRODUCTION") {
} else {
    const httpServer = http.createServer(app).listen(3000, () => {
        console.log(`Server is running on port 3001`);
    });

    httpServer.setTimeout(60000);
}
