import { Request, Response, NextFunction } from "express";


export const mid1 = () => {
        return (req: Request, res: Response, next: NextFunction): void => {

            console.log("Hello from MID 1")

            next();
        };
}

export const mid2 = () => {
        return (req: Request, res: Response, next: NextFunction): void => {

            console.log("Hello from MID 2")

            next();
        };
}