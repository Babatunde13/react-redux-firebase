import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { config } from "dotenv";

config()

var firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    databaseUrl: process.env.REACT_APP_databaseUrl,
    measurementId: process.env.REACT_APP_measurementId
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase