import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("도구리 응애");

const handleProfile = (req, res) => res.send("도구리 메롱");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));
app.use(helmet()); // For Security
app.use(morgan("combined"));


app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;