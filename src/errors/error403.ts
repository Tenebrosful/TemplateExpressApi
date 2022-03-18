import { Request, Response } from "express";

/**
 * Error 401 "Forbidden"
 */
export default function error403(req: Request, res: Response) {
  res.status(400).json({
    code: 403,
    message: "Accès interdit"
  });
}