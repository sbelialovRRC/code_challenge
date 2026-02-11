import { addDocument, getDocumentById, getCollection } from "../repositories/itemRepository"
import { ItemResponse } from "../models/itemResponse"
import { ItemCreateRequest } from "../models/itemCreateRequestModel"
import {ItemDTO} from "../models/itemDTO"

export const getAllItems = async (): Promise<Array<ItemDTO> | undefined> => {
    // Logic to process all items from the database
    return await getCollection();
};

export const getItemByIdAsync = async (id: string): Promise<ItemResponse> => {
    // Logic to process all items from the database
    let entity = await getDocumentById(id)
    return {
        content: entity?.content,
        id: entity?.id
    };
};

export const createNewItem = async (item: ItemCreateRequest): Promise<string> => {
    // Logic to add a new item to the database
    return await addDocument(item);
};

export const updateItemById = (id: number, item: string): string => {
    // Logic to update an item in the database
    return "Item updated";
};

export const deleteItemById = (id: number): string => {
    // Logic to delete an item from the database
    return "Item deleted";
};