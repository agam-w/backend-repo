import express from "express";
import { fetchUserData, updateUserData } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/fetch-user-data", fetchUserData);

// auth middleware for udpate endpoint
router.use("/update-user-data", authMiddleware);
router.post("/update-user-data", updateUserData);

export default router;
