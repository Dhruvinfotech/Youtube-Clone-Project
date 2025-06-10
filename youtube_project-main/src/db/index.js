import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nConnected to MongoDB !! DB HOST: ${connectionInstance.connection.host} `)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDB;