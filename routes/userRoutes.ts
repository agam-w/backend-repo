import express from "express";

const router = express.Router();

router.get("/fetch-user-data", (req, res) => {
  res.send("fetch user data");
});

router.post("/update-user-data", (req, res) => {
  res.send("update user data");
});

export default router;
