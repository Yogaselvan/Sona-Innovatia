import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDdho8FJiG0wbtDaO0NNB8wf8rFlJrbn38",
  authDomain: "medi-care-202f5.firebaseapp.com",
  projectId: "medi-care-202f5",
  storageBucket: "medi-care-202f5.appspot.com",
  messagingSenderId: "362529553784",
  appId: "1:362529553784:web:8ea9568e0020ce28225c8d",
});

export const auth = app.auth();
export const db = firebase.firestore();
export default app;
