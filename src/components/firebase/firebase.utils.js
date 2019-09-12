import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
        apiKey: "AIzaSyDycR9EqfClImO8Ixs6RtrHv6YrS0ebqGU",
        authDomain: "crwn-db-85376.firebaseapp.com",
        databaseURL: "https://crwn-db-85376.firebaseio.com",
        projectId: "crwn-db-85376",
        storageBucket: "",
        messagingSenderId: "462373706636",
        appId: "1:462373706636:web:5c7ebd12232326d96cd4a9"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;