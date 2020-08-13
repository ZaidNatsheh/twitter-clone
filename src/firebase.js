
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBcbB4rskdabJTw3QHRbMynoxeQo70Yrik",
    authDomain: "twitter-clone-69514.firebaseapp.com",
    databaseURL: "https://twitter-clone-69514.firebaseio.com",
    projectId: "twitter-clone-69514",
    storageBucket: "twitter-clone-69514.appspot.com",
    messagingSenderId: "879827458550",
    appId: "1:879827458550:web:87fbc008c116bf08aa0fd7",
    measurementId: "G-HMDLPZ7WYF",
});

const db = firebaseApp.firestore();


export default db;
