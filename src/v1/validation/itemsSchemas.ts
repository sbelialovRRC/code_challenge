import Joi from "joi";

// Post operation schemas organized by request part
export const itemSchemas = {
    // POST /Item - Create new Item
    create: {
        body: Joi.object({
            userId: Joi.string().required().min(5).max(10).email().messages({
                "any.required": "User ID is required",
                "string.empty": "User ID cannot be empty",
            }),
            content: Joi.string().required().messages({
                "any.required": "Content is required",
                "string.empty": "Content cannot be empty",
            }),
        }),
    },

    // GET /Item/:id - Get single Item
    getById: {
        params: Joi.object({
            id: Joi.number().required().messages({
                "any.required": "Item ID is required",
                "string.empty": "Item ID cannot be empty",
            }),
        })
    },

    // PUT /Item/:id - Update Item
    update: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Item ID is required",
                "string.empty": "Item ID cannot be empty",
            }),
        }),
        body: Joi.object({
            content: Joi.string().optional().messages({
                "string.empty": "Content cannot be empty",
            }),
             userId: Joi.string().required().messages({
                "any.required": "User ID is required",
                "string.empty": "User ID cannot be empty",
            }),
        }),
    },

    // DELETE /items/:id - Delete items
    delete: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Post ID is required",
                "string.empty": "Post ID cannot be empty",
            }),
        }),
    },
};