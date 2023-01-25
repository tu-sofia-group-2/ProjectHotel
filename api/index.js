import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import hotelRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import roomsRoute from "./routes/rooms.js"
import reeditionRoute from "./routes/reedition.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
};

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("hello this works");
})



app.use("/api/hotels", hotelRoute);
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/login/reissue", reeditionRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Neshto se obarka"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})


app.listen(8800, ()=>{
    connect();
    console.log("Connected to backend");
});