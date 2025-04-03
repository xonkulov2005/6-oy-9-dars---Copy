import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDovFykbTJrpb1WYcjwSMoTkISYfAwrHyo",
  authDomain: "recepies-ce2f8.firebaseapp.com",
  projectId: "recepies-ce2f8",
  storageBucket: "recepies-ce2f8.firebasestorage.app",
  messagingSenderId: "1053328020988",
  appId: "1:1053328020988:web:eebce865fca4c271170e79",
};

const app = initializeApp(firebaseConfig);

//auth

export const auth = getAuth();
