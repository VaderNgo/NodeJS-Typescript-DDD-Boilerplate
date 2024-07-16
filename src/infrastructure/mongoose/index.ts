import mongoose from "mongoose";
import dbConfig from "@config/mongoose";

export const mongoConnection = async () => {
    try {
        await mongoose.connect(dbConfig.uri);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("Error connecting to MongoDB: ", err);
    }
};
