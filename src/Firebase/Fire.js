import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBetebPDvWIJLv7d_bLBH1EajQ0co6BDK4",
  authDomain: "reactloginsignup.firebaseapp.com",
  projectId: "reactloginsignup",
  storageBucket: "reactloginsignup.appspot.com",
  messagingSenderId: "682150801381",
  appId: "1:682150801381:web:4ffc3810b031f4afcbc90c",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;