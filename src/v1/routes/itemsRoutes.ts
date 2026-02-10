import express, { Router } from "express";
import {
    getAllItem,
    createItem,
    deleteItem,
    updateItem
} from "../controllers/itemsController";

const itemsRoutes: Router = express.Router();

itemsRoutes.get("/", getAllItem);
itemsRoutes.post("/", createItem);
itemsRoutes.put("/:id", updateItem);
itemsRoutes.delete("/:id", deleteItem);

export default itemsRoutes;