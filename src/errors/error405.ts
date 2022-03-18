import { Request, Response } from "express";

/**
 * Error 405 "Method Not Allowed"
 */
export default function error405(req: Request, res: Response) {
  res.status(405).json({
    code: 405,
    message: "Méthode non-autorisée"
  });
}