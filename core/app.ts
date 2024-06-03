import express from "express";
import userRoutes from "../routes/userRoutes";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
