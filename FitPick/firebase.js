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

// iOS - 10784791395-fsu37876k7chvibjr6rqkm3n2t7fahkc.apps.googleusercontent.com
// Android - 10784791395-7lk4jsdpgm1isg8qu88vj9fmfcdkpc12.apps.googleusercontent.com