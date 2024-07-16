import redisConfig from "@/config/redis";
import RedisStore from "connect-redis";
import { SessionOptions } from "express-session";
import { createClient } from "redis";

let redisClient = createClient({
    url: redisConfig.url,
});

redisClient
    .connect()
    .catch(console.error)
    .then(() => console.log("Connected to Redis"));

let redisStore = new RedisStore({
    client: redisClient,
    prefix: "sess:",
});

const sessionOptions: SessionOptions = {
    store: redisStore,
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.ENV === "PRODUCTION",
        httpOnly: true,
        //domain: process.env.COOKIE_DOMAIN,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: "none",
    },
};

export { sessionOptions };
