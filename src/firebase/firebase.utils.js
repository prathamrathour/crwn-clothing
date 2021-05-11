import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCvmyhKZGIFP4al-j7p5WlFSsLhQUl3QrQ",
    authDomain: "crwn-db-4f8a2.firebaseapp.com",
    projectId: "crwn-db-4f8a2",
    storageBucket: "crwn-db-4f8a2.appspot.com",
    messagingSenderId: "687564393364",
    appId: "1:687564393364:web:0db880f9d688931f3a1d81",
    measurementId: "G-DBCRJFXGFG"
  };

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const  firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;

   