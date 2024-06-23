import { Request, Response } from "express";
import { statusCode } from "./../../utils/statusCode.util";

export const signOutController = async (_req: Request, res: Response) => {
    return res.clearCookie("access_token")
    .status(statusCode.OK)
    .json({ message: "Successfully logged out" });
}
