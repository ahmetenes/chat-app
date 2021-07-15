import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC7BCXIEgUG4XcOq2gDVhBzWak7csHbBGA",
    authDomain: "chat-app-c106a.firebaseapp.com",
    projectId: "chat-app-c106a",
    storageBucket: "chat-app-c106a.appspot.com",
    messagingSenderId: "913791780933",
    appId: "1:913791780933:web:a5c87c0c25cb3616293b2c",
    measurementId: "G-RJZEZTMRL2"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const database = firebaseapp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default database;