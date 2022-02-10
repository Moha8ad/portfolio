import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCUyuyWKzCUNvrrdvbH7CrNNvRN23HU6q4",
  authDomain: "quotify-asar.firebaseapp.com",
  projectId: "quotify-asar",
  storageBucket: "quotify-asar.appspot.com",
  messagingSenderId: "891595606593",
  appId: "1:891595606593:web:7e9a12450fef1b12e694c0",
  measurementId: "G-3H36FEK7HE"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/icannotbelieve`);
  const snapShot = await userRef.get(); 

  console.log(snapShot)

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName: 'finally',
        email: 'this@ishappening.com',
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

