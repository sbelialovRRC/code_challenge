import express, { Router } from "express";
import {
    getAllItem,
    getItemById,
    createItem,
    deleteItem,
    updateItem
} from "../controllers/itemsController";

import { validateRequest } from "../middleware/validate";
import { itemSchemas } from "../validation/itemsSchemas";

const itemsRoutes: Router = express.Router();

itemsRoutes.get("/", getAllItem);
itemsRoutes.get("/:id", getItemById )
itemsRoutes.post("/",  validateRequest(itemSchemas.create), createItem);
itemsRoutes.put("/:id", updateItem);
itemsRoutes.delete("/:id", deleteItem);

export default itemsRoutes;