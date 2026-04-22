import express from "express";
import { ENV } from "./config/env";
import { clerkMiddleware } from '@clerk/express'
import cors from "cors"

const app = express();
app.use(cors({origin: ENV.FRONTEND_URL}))
app.use(clerkMiddleware()); //auth object is attached to the req object
app.use(express.json()); //for parsing the request body
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});