import express, { Express } from "express";
import { getPlayerById, getAllPlayersWithCount, getPlayerRatingByPlayerId } from "./service/playerService"

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
    let result = getAllPlayersWithCount();

    res.json(result);
});

app.get("/api/v1/players/:id", (req, res) => {
    let id = Number(req.params.id)

    let result = getPlayerById(id);

    if (result === undefined){
        res.status(404).send("User not found")
        return;
    }

    res.json(result);
});

app.get("/api/v1/players/:id/rating", (req, res) => {
    let result = getPlayerRatingByPlayerId(123);

    res.json(result);
});


export default app;