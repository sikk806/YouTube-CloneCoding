import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
const PORT = 8000;

const handleListening = () => console.log(`Listening http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("도구리 응애");

const handleProfile = (req, res) => res.send("도구리 메롱");

app.use(helmet()); // For Security
app.use(morgan("combined"));

const middleware = (req, res, next) => {
    res.send('Blocked by middleware.....');
}

app.get("/", middleware, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);