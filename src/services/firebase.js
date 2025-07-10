import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD18M9v3gTGQzat_U-dvf6Rt8wfImcBv60",
  authDomain: "arcade-fire-69ea3.firebaseapp.com",
  projectId: "arcade-fire-69ea3",
  storageBucket: "arcade-fire-69ea3.firebasestorage.app",
  messagingSenderId: "390905426877",
  appId: "1:390905426877:web:0124d2c471f9d72798d8d4",
  measurementId: "G-KZ05ENDX4X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
