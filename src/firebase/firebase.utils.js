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

firebase.initializeApp(firebaseConfig);

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

export const getQuotesDB = async (key) => {
  const userRef = firestore.doc(key);
  const snapShot = await userRef.get();
  return snapShot.data().quotes.map(i => i);
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {

  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, obj);
  });

  return await batch.commit();

};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {  quotes } = doc.data();

    return {
      id: doc.quoteId,
      quotes 
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.quotes]= collection;
    return accumulator;
  }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

