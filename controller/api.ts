import { RequestHandler } from "express";
import { getUsers } from "../repository/userCollection";

export const fetchUserData: RequestHandler = async (req, res) => {
  const users = await getUsers();
  res.json(users);
};

export const updateUserData: RequestHandler = async (req, res) => {
  res.send("update user data");
};
