import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEns0vJVlBUQWCVTaBTPc1EF-CGaw4dcc",
    authDomain: "facebook-messenger-clone-95627.firebaseapp.com",
    projectId: "facebook-messenger-clone-95627",
    storageBucket: "facebook-messenger-clone-95627.appspot.com",
    messagingSenderId: "881754538432",
    appId: "1:881754538432:web:1da873992c5e53b0c34825"
})

const db = firebaseApp.firestore();

export default db;
