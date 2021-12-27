import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAkjM4z4ObWBYrXLx3NdPjx30jTfEHXrfE",
    authDomain: "quotify-2021.firebaseapp.com",
    projectId: "quotify-2021",
    storageBucket: "quotify-2021.appspot.com",
    messagingSenderId: "661031182694",
    appId: "1:661031182694:web:84cca8247f5c22549c28a7",
    measurementId: "G-WSYXV3PCDG"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const store = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;