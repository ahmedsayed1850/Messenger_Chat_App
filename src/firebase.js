import firebase from "firebase/app";
import "firebase/auth";

/**
 * create firebase app and take the config paste it here
 */
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDCEn4kXl6wuvKpPspZqnCrZ1nW7gLr78Q",
    authDomain: "messengerchat-4f4a5.firebaseapp.com",
    projectId: "messengerchat-4f4a5",
    storageBucket: "messengerchat-4f4a5.appspot.com",
    messagingSenderId: "350122610329",
    appId: "1:350122610329:web:eed61347589c4260dbb208",
  })
  .auth();
