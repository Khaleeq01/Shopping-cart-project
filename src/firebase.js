import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbODIiz-IK_f9UW0O4a0AqJBAkb7R0TWs",
  authDomain: "cart-bc533.firebaseapp.com",
  projectId: "cart-bc533",
  storageBucket: "cart-bc533.appspot.com",
  messagingSenderId: "1010670364079",
  appId: "1:1010670364079:web:eadfb07bb07ccd1e5bbb5a"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore()
