import { Request, Response } from "express";

/**
 * Error 401 "Unauthorized"
 */
export default function error401(req: Request, res: Response) {
  res.status(400).json({
    code: 401,
    message: "Une authentification est requise"
  });
}