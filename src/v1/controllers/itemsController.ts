import { Request, Response } from "express";
import { getAllItems, createNewItem, updateItemById, deleteItemById } from "../service/itemsService"
import { HTTP_STATUS } from "../../constants/httpConstants"
import { successResponse } from "../models/responseModel";

export const getAllItem = (req: Request, res: Response) => {
    try {
        const items: string[] = getAllItems();


        res.status(HTTP_STATUS.OK).json(successResponse(items, "Here is your requested items"));
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error" });
    }
}

export const createItem = (req: Request, res: Response) => {
    let result = createNewItem("new item")

    res.status(418).send(result);
}

export const updateItem = (req: Request, res: Response) => {
    let result = updateItemById(123, "test item")

    res.json(result)
}


export const deleteItem = (req: Request, res: Response) => {
    let result = deleteItemById(123)

    res.json(result)
}