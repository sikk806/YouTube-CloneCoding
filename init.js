import dotenv from "dotenv";
import "./db";
import app from "./app";
import "./models/Video";
import "./models/Comment";
import "./models/User";

dotenv.config();

const PORT = process.env.PORT || 8000;

const handleListening = () =>
  console.log(`I listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
