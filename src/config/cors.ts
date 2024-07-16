import { CorsOptions } from "cors";

const whiteList = ["http://localhost:3333"];

export const corsOptions: CorsOptions = {
    origin: whiteList,
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    credentials: true,
};
