import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const getUsers = async () => {
  const q = query(collection(db, "USERS"));
  const querySnapshot = await getDocs(q);

  const users = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return users;
};
