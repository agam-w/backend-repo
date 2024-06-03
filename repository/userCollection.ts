import { collection, query, getDocs } from "firebase/firestore";
import { FirestoreError } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { ApiError } from "../entities/ApiError";

/**
 * get list of users from collection
 */
export const getUsers = async () => {
  try {
    const q = query(collection(db, "USERS"));
    const querySnapshot = await getDocs(q);

    const users = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return users;
  } catch (error) {
    if (error instanceof FirestoreError) {
      console.error("Firestore Error:", error.code, error.message);
      return {
        code: error.code,
        message: error.message,
      } as ApiError;
    } else {
      console.error("Unexpected Error:", error);
      return {
        code: "unexpected",
        message: "Unexpected Error",
      } as ApiError;
    }
  }
};
