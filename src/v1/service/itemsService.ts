import { addDocument, getDocumentById, getCollection, updateDocument, deleteDocument } from "../repositories/itemRepository"
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

export const updateItemById = async (id: string, item: ItemCreateRequest): Promise<void> => {
    // Logic to update an item in the database
    await updateDocument(id, item);
    return;
};

export const deleteItemById = async (id: string): Promise<void> => {
    // Logic to delete an item from the database
    await deleteDocument(id);
};