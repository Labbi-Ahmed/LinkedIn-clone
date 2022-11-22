import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCPN3sgPwQ6-6-bKX-G5LMgdYe8ZwmFJo",
  authDomain: "linkedin-clone-dba9c.firebaseapp.com",
  projectId: "linkedin-clone-dba9c",
  storageBucket: "linkedin-clone-dba9c.appspot.com",
  messagingSenderId: "942324442010",
  appId: "1:942324442010:web:5ebac397571f09429fd023",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
