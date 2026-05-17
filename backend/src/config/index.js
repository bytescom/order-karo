import dotenv from "dotenv";
dotenv.config({ quiet: true });

export const PORT = process.env.PORT;
export const MONGODB_URL = process.env.MONGODB_URL;