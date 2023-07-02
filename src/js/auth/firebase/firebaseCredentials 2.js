import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAQk3GyyPA4u910s52W9yLdUgVYTkIgwA",
  authDomain: "bookshelf-65058.firebaseapp.com",
  projectId: "bookshelf-65058",
  storageBucket: "bookshelf-65058.appspot.com",
  messagingSenderId: "292149728326",
  appId: "1:292149728326:web:fce2c2cc41f05fbd002647",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
