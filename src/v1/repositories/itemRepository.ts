import { db } from "../../config/firebaseConfig";
import { DocumentReference, QuerySnapshot  } from "firebase-admin/firestore";
import { Item } from "../models/itemModel"
import { ItemCreateRequest } from "../models/itemCreateRequestModel"
import { ItemDTO } from "../models/itemDTO"

export const addDocument = async (item: ItemCreateRequest): Promise<string> => {
    // Create a reference to a document in the 'users' collection with ID 'user1'
    // If the document doesn't exist, it will be created
    const docRef: DocumentReference = db.collection("items").doc();

    // Use the `set` method to add or overwrite data in the document
    // The data is passed as an object with fields and their values
    const itemEntity: Item = {
        content: item.content,
        userId: item.userId,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    await docRef.set(itemEntity);

    return docRef.id;
};

export const getDocumentById = async (id: string): Promise<ItemDTO | undefined> => {
    // Create a reference to a specific document in the 'users' collection
    const docRef: DocumentReference = db.collection("items").doc(id);

    // Use the `get()` method to retrieve the document
    const doc = await docRef.get();

    // Check if the document exists
    if (doc.exists) {
        // `doc.data()` returns an object with all fields in the document
        let data = doc.data();

        return {
            content: data!.content,
            createdAt: data!.createdAt,
            id: doc.id,
            updatedAt: data!.updatedAt,
            userId: data!.userId
        }
    } else {
        console.log("No such document!");
    }
};

export const getCollection = async (): Promise<Array<ItemDTO> | undefined> => {
    // Retrieve all documents from the 'users' collection
    // `get()` returns a QuerySnapshot containing all documents in the collection
    const snapshot: QuerySnapshot = await db.collection("items").get();

    const items: ItemDTO[] = []

    // Iterate through each document in the collection
    snapshot.forEach((doc) => {
        // `doc.id` is the document's unique identifier
        // `doc.data()` returns an object with all fields in the document
        let data = doc.data();
        items.push({
            id: doc.id,
            content: data!.content,
            createdAt: data!.createdAt,
            updatedAt: data!.updatedAt,
            userId: data!.userId
        });
    });

    return items;
};