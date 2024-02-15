import { initializeApp } from 'firebase/app';
import "firebase/auth";
import { getAuth } from 'firebase/auth';

// TODO
const dbkey = process.env.Wjdn34fehvbgrwjn2dh;

const firebaseConfig = {
    apiKey: "AIzaSyDb07qS1E9NZdY8jaHUTICbjq2h7c1bI_E",
    authDomain: "fitpick-411706.firebaseapp.com",
    projectId: "fitpick-411706",
    storageBucket: "fitpick-411706.appspot.com",
    messagingSenderId: "10784791395",
    appId: "1:10784791395:web:0f6c81a2a06259b0121156",
    measurementId: "G-7RPGRCSX2Z"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

//export default app;