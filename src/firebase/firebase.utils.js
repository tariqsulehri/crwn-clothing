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


export const createUserProfileDocument = async (userAuth, addtionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            });

        } catch (error) {
            console.log("Error Creating User...", error.message);
        }

    }
    return userRef;
};


export const convertCollectionSnapshotToMap = (collections) => {
    const transformColletion = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title: title,
            items: items
        }
    })

    return transformColletion.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});


}


// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);
//     const batch = firestore.batch();

//     objectsToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef, obj)
//     });

//     return await batch.commit();
// }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


