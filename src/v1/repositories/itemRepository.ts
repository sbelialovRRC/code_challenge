import { db } from "../../config/firebaseConfig";
import { DocumentReference } from "firebase-admin/firestore";
import {Item} from "../models/itemModel"

export const addDocument = async (): Promise<void> => {
    // Create a reference to a document in the 'users' collection with ID 'user1'
    // If the document doesn't exist, it will be created
    const docRef: DocumentReference = db.collection("items").doc();

    // Use the `set` method to add or overwrite data in the document
    // The data is passed as an object with fields and their values
    await docRef.set({
        userId: "1234565",
        content: "Test Item Content",
        createdAt: new Date(),
        updatedAt: new Date(),
        testFiled: "test"
    });

    console.log("Document added");
};

export const getDocumentById = async (id: string): Promise<Item | undefined> => {
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