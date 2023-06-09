import express from "express";
import dotenv from "dotenv";
import connectionDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import tuitionRoutes from "./routes/tuitionRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
//confid dotenv

dotenv.config();
const port = process.env.PORT || 1911;

//connect DB
connectionDB();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
//using Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tuition", tuitionRoutes);
app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use(express.static(path.join(__dirname,"../client/build")))
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"../client/build"))
})
//Listening to a Port number
app.listen(port, () => {
  console.log(`Listening..... ${port}`);
});
