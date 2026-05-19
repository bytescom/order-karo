import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { FRONTEND_URL } from "./src/config/index.js";
import { PORT } from "./src/config/index.js";
import { connectDB } from "./src/config/db.config.js";
import authRoutes from "./src/routes/auth.route.js";

connectDB();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);

app.get('/api/auth/test',(req, res)=>{
   res.json({
    success : true,
    message : "Auth route is working successfully"
   })
})

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})

export default app;