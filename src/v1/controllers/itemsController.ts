import { Request, Response } from "express";
import { getAllItems, createNewItem, updateItemById, deleteItemById, getItemByIdAsync } from "../service/itemsService"
import { HTTP_STATUS } from "../../constants/httpConstants"
import { successResponse } from "../models/responseModel";
import { ItemCreateRequest } from "../models/itemCreateRequestModel"
import { ItemDTO } from "../models/itemDTO";

export const getAllItem = async (req: Request, res: Response) => {
    try {
        const items = await getAllItems();

        res.status(HTTP_STATUS.OK).json(successResponse(items, "Here is your requested items"));
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error" });
    }
}

export const getItemById = async (req: Request, res: Response) => {
    try {
        let id = req.params.id;
        let results = await getItemByIdAsync(id);


        res.status(HTTP_STATUS.OK).json(successResponse(results, "Data retrieved"));
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error" });
    }
}


export const createItem = async (req: Request, res: Response) => {
    const requestItem: ItemCreateRequest = {
        content: req.body.content,
        userId: req.body.userId
    }

    let result = await createNewItem(requestItem)

    res.status(HTTP_STATUS.CREATED).send(result);
}

export const updateItem = (req: Request, res: Response) => {
    let result = updateItemById(123, "test item")

    res.json(result)
}


export const deleteItem = (req: Request, res: Response) => {
    let result = deleteItemById(123)

    res.json(result)
}