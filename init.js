import "./db";
import app from "./app";

const PORT = 8000;

const handleListening = () => console.log(`I listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);