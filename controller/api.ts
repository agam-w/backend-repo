import { RequestHandler } from "express";
import { getUser, updateUser } from "../repository/userCollection";

export const fetchUserData: RequestHandler = async (req, res) => {
  // TODO: dummy user id for simple use case
  const id = "demo";
  const users = await getUser(id);
  res.json(users);
};

export const updateUserData: RequestHandler = async (req, res) => {
  // TODO: dummy user id for simple use case
  const id = "demo";
  const data = req.body;

  const user = await updateUser(id, {
    name: data.name,
    username: data.username,
    email: data.email,
    phone: data.phone,
  });
  res.json(user);
};
