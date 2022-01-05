// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCcby7X6pxLdi__UNACkIB-RGASVjTNBxY',
  authDomain: 'recipe-fork-app.firebaseapp.com',
  projectId: 'recipe-fork-app',
  storageBucket: 'recipe-fork-app.appspot.com',
  messagingSenderId: '986068827624',
  appId: '1:986068827624:web:b08d648cfa19741c04385d',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
