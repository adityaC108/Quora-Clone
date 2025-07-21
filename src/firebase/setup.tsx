import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZMvyOV1zJTqhT0AUWSvwk383lmzQKjqQ",
  authDomain: "quora-clone-d7cd8.firebaseapp.com",
  projectId: "quora-clone-d7cd8",
  storageBucket: "quora-clone-d7cd8.firebasestorage.app",
  messagingSenderId: "393354710392",
  appId: "1:393354710392:web:069db9b3f1ec04cb478c8d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider()
export const storage = getFirestore(app)