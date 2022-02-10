import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
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

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); 
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error ) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;