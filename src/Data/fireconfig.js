import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAq4p7W7rsvFJfQn0d_vF-5yhswKx6UXws",
    authDomain: "rjs-bulgach.firebaseapp.com",
    projectId: "rjs-bulgach",
    storageBucket: "rjs-bulgach.appspot.com",
    messagingSenderId: "44638371098",
    appId: "1:44638371098:web:5c15db5698386cd5c180a3"
};


const fireapp = initializeApp(firebaseConfig);
export const firedb = getFirestore(fireapp)