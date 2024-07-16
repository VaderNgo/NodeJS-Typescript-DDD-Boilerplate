import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
    uri: process.env.MONGODB_URL,
    options: {},
};

export default dbConfig;
