import { initializeApp } from "firebase/app";

import {
  getAuth
} from "firebase/auth";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_X1dqlNNt9-1OQdK1QlhLYtjO9c_V4O0",
  authDomain: "belmart-predictor-2026.firebaseapp.com",
  projectId: "belmart-predictor-2026",
  storageBucket: "belmart-predictor-2026.firebasestorage.app",
  messagingSenderId: "242895001179",
  appId: "1:242895001179:web:7db1207ff5e6067405917e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);