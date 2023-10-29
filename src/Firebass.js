import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW4TcaM4CIRKfcvdcAlNt0wWEcNEgPMk4",
  authDomain: "admindashboard-c6a0b.firebaseapp.com",
  projectId: "admindashboard-c6a0b",
  storageBucket: "admindashboard-c6a0b.appspot.com",
  messagingSenderId: "1046313193430",
  appId: "1:1046313193430:web:0ff13ad39b70e3b0085e77"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();