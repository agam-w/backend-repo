import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { FirestoreError } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { ApiError } from "../entities/ApiError";
import { ApiResult } from "../entities/ApiResult";
import { User } from "../entities/User";

// /**
//  * get list of users from USERS collection
//  */
// export const getUsers = async () => {
//   try {
//     const q = query(collection(db, "USERS"));
//     const querySnapshot = await getDocs(q);
//
//     const users = querySnapshot.docs.map((doc) => {
//       return {
//         id: doc.id,
//         ...doc.data(),
//       };
//     });
//
//     return users;
//   } catch (error) {
//     if (error instanceof FirestoreError) {
//       console.error("Firestore Error:", error.code, error.message);
//       return {
//         code: error.code,
//         message: error.message,
//       } as ApiError;
//     } else {
//       console.error("Unexpected Error:", error);
//       return {
//         code: "unexpected",
//         message: "Unexpected Error",
//       } as ApiError;
//     }
//   }
// };

/**
 * get a from USERS collection
 */
export const getUser = async (id: string) => {
  try {
    const docRef = doc(db, "USERS", id);
    const docSnap = await getDoc(docRef);

    const user = docSnap.data() as Omit<User, "id">;

    if (docSnap.exists()) {
      // data found, return the data
      const res: ApiResult<User> = {
        success: true,
        message: "Successfully fetched data",
        data: {
          id: docSnap.id,
          ...user,
        },
      };
      return res;
    } else {
      // data not found
      return {
        code: "notfound",
        message: "No such data",
      } as ApiError;
    }
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

type UpdateUserFields = Partial<Omit<User, "id">>;

/**
 * update a user from USERS collections
 */
export const updateUser = async (id: string, data: UpdateUserFields) => {
  try {
    const docRef = doc(db, "USERS", id);
    const docSnap = await getDoc(docRef);

    // sanitize undefined value
    const cleanData = Object.entries(data)
      .filter(([k, v]) => v != undefined)
      .reduce(
        (obj, [key, value]) => {
          obj[key] = value;
          return obj;
        },
        {} as Record<string, any>,
      );

    if (docSnap.exists()) {
      // data found, update the data
      setDoc(docRef, cleanData, { merge: true });

      const res: ApiResult<User> = {
        success: true,
        message: "Successfully update data",
      };
      return res;
    } else {
      // data not found
      return {
        code: "notfound",
        message: "No such data",
      } as ApiError;
    }
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
