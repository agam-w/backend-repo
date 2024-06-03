import { RequestHandler } from "express";
import { ApiError } from "../entities/ApiError";

export const authMiddleware: RequestHandler = (req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  console.log("headers:", req.headers);

  if (!req.headers.authorization) {
    return res.status(403).json({
      code: "no-credentials",
      message: "No credentials sent!",
    } as ApiError);
  }

  // TODO:
  // - any authorization headers sent will work for now
  // - check Bearer token later

  next();
};
