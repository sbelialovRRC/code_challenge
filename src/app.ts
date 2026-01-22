import express, { Express } from "express";

let app: Express = express();

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

app.get("/api/v1/players", (req, res) => {
    res.json({ test: "test" });
});
app.get("/api/v1/players/:id", (req, res) => {
    res.json({ test: "test" });
});
app.get("/api/v1/players/:id/rating", (req, res) => {
    res.json({ test: "test" });
});


export default app;