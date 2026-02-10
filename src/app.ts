import express, { Express } from "express";
import itemsRoutes from "./v1/routes/itemsRoutes";
import morgan from "morgan";


const app: Express = express();

app.use(express.json());

app.use(morgan("combined"));

app.use("/api/v1/items", itemsRoutes);

export default app;