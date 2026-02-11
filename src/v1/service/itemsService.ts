import { addDocument, getDocumentById } from  "../repositories/itemRepository"
import { ItemResponse } from "../models/itemResponse"
import e from "node_modules/@types/express";
export const getAllItems = (): string[] => {
    // Logic to process all items from the database
    return ["Item 1", "Item 2"];
};

export const getItemByIdAsync = async (id: string): Promise<ItemResponse>  => {
    // Logic to process all items from the database
    let entity = await getDocumentById(id)
    return {
        content: entity?.content,
        id: entity?.id
    } ;
};

export const createNewItem = (item: string): string => {
    // Logic to add a new item to the database
    addDocument();
    return "Item added";
};

export const updateItemById = (id: number, item: string): string => {
    // Logic to update an item in the database
    return "Item updated";
};

export const deleteItemById = (id: number): string => {
    // Logic to delete an item from the database
    return "Item deleted";
};