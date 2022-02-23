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

export const auth = firebase.auth();
export const db = firebase.firestore();

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {

  const collectionRef = db.collection(collectionKey);

  const batch = db.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, obj);
  });

  return await batch.commit();

};

export const addLiked = (item) => {
    db.collection("test").doc('F87Qww0qRNcZRr9OWyfJ23m1ykZ2').collection("liked").doc().set(
      item
  ).then(() => {                
    console.log("Document successfully edited!");
  }).catch((error) => {
    console.error("Error editing document: ", error);
  });
}

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


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

