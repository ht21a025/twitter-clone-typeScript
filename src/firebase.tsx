import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQwhXQCfD7qaJgEw5hB6ztzvXjJjW4DeA",
  authDomain: "type-twitter-clone.firebaseapp.com",
  projectId: "type-twitter-clone",
  storageBucket: "type-twitter-clone.appspot.com",
  messagingSenderId: "494363529787",
  appId: "1:494363529787:web:110f8bca71331daac6021e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
