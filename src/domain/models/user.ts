// src/domain/entities/User.ts
import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true, validate: [validator.isEmail, "Invalid email"] },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
