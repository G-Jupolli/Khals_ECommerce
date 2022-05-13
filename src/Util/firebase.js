import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqRsCeUA_7WenBXkL5mwrloDrStoRE9lU",
  authDomain: "e-commerce-app-af4ee.firebaseapp.com",
  projectId: "e-commerce-app-af4ee",
  storageBucket: "e-commerce-app-af4ee.appspot.com",
  messagingSenderId: "217282957864",
  appId: "1:217282957864:web:8cadf6f68cdab0fc179b1d",
  measurementId: "G-W67Q5GMF1L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };