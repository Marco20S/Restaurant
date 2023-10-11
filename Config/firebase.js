// Import the functions you need from the SDKs you need
// import { firebase,auth } from '@react-native-firebase/auth';
import { initializeApp } from "firebase/app";
// import auth from '@react-native-firebase/auth';
import "firebase/auth"

import { initializeAuth, get } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage"
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4",
    authDomain: "restaurantapp-38fda.firebaseapp.com",
    projectId: "restaurantapp-38fda",
    storageBucket: "restaurantapp-38fda.appspot.com",
    messagingSenderId: "91615067307",
    appId: "1:91615067307:web:0f586b03966ce163df8bee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export default getFirestore(app)
export const database = getFirestore(app);
export const storage = getStorage(app)

//auth for firebase
// export const auth = getAuth(app)

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});