import express, { Express } from "express";
import itemsRoutes from "./v1/routes/itemsRoutes";
import morgan from "morgan";
import {mid1, mid2} from "./v1/middleware/mid1"

const app: Express = express();

app.use(express.json());

app.use(morgan("combined"));

app.use(mid2());
app.use(mid1());

app.use("/api/v1/items", itemsRoutes);

export default app;