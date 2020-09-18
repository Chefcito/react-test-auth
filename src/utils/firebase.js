import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();
const usersRef = database.collection('users');

const signUp = async (email, password) => {
  let atRegex = /@/;
  if (atRegex.test(email) === false) {
    alert('Ingresa un correo electrónico válido');
    return;
  } else if (password.length > 6) {
    alert('La contraseña debe tener 6 caracteres como mínimo.');
    return;
  }

  try {
    return await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    throw new Error(error.code);
  }
}

const logIn = async (email, password) => {
  try {
    return await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    throw new Error(error.code);
  }
}

const addUser = async (user) => {
  try {
    return await usersRef.add(user);
  } catch (error) {
    throw new Error(error.code);
  }
}

export const fb = {
  auth,
  database,
  usersRef,
  signUp,
  logIn,
  addUser,
}