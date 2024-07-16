import dotenv from "dotenv";

dotenv.config();

const redisConfig = {
    url: process.env.REDIS_URL || "redis://localhost:6379",
};

export default redisConfig;
