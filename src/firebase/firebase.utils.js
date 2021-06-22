import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBfICsWCxTfUDmuNV2OSpCH-8gNL73Hask',
  authDomain: 'clothes-app-61616.firebaseapp.com',
  projectId: 'clothes-app-61616',
  storageBucket: 'clothes-app-61616.appspot.com',
  messagingSenderId: '529642616145',
  appId: '1:529642616145:web:a2f5c3e8decfc716190f70',
  measurementId: 'G-W0RLJRF3VR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(
        'An error occured during adding a new user to database',
        error.message
      );
    }
  }
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
