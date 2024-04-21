import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnHR8JjDjoKSG5x2XYGhUF8MBJ2b2u9-c",
  authDomain: "formfirebase-11cef.firebaseapp.com",
  databaseURL: "https://formfirebase-11cef-default-rtdb.firebaseio.com",
  projectId: "formfirebase-11cef",
  storageBucket: "formfirebase-11cef.appspot.com",
  messagingSenderId: "238938522364",
  appId: "1:238938522364:web:fa470c71caba074bfb8d79",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
