import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLS_HarhOrRM6XVHlgQ7DaY05B-hBSjiw",
  authDomain: "miniblog-1ad44.firebaseapp.com",
  projectId: "miniblog-1ad44",
  storageBucket: "miniblog-1ad44.appspot.com",
  messagingSenderId: "1092128149502",
  appId: "1:1092128149502:web:579ff36c9bfc14a96ebaaf",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
