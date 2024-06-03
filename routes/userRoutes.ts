import express from "express";
import { fetchUserData, updateUserData } from "../controller/api";

const router = express.Router();

router.get("/fetch-user-data", fetchUserData);
router.post("/update-user-data", updateUserData);

export default router;
