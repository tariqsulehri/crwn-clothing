import firebase from 'firebase/app';  //Load all firebase util libary.
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAhXUn6S4hbmUyQ9300BHksU0I8GXPhUm0",
    authDomain: "crwn-db-60d8b.firebaseapp.com",
    projectId: "crwn-db-60d8b",
    storageBucket: "crwn-db-60d8b.appspot.com",
    messagingSenderId: "92286985213",
    appId: "1:92286985213:web:1a0f589fd656ffabd3af94",
    measurementId: "G-VNGQBL6QRD"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


