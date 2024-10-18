import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utilss/database.js";
import userRoute from "./routes/user_route.js";
import companyRoute from "./routes/company_route.js";

import jobRoute from "./routes/job_route.js";
import applicationRoute from "./routes/application_route.js";

dotenv.config({});
const app = express();
//-------------------- Basic Test----------------------
// 
// app.get("/home", (req, res) =>{
//     return res.status(200).json({
//         message : "Hi I am Shwetha M",
//         success : true
//     });
// });
//-------------------- Basic Test----------------------


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;



// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})