// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDndwZSiYbzs7dn6uN6AHUxOMoyrxkMVqA",
    authDomain: "whatsapp-clone-by-misk.firebaseapp.com",
    projectId: "whatsapp-clone-by-misk",
    storageBucket: "whatsapp-clone-by-misk.appspot.com",
    messagingSenderId: "983490874369",
    appId: "1:983490874369:web:2d5b65784305b0b16e8400",
    measurementId: "G-X7QCGJZKC5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;