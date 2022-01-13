import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDPdFSzMpzK-n1TYPzLM7JUD3VrZbTqqd4",
  authDomain: "team-voting-app-996ef.firebaseapp.com",
  projectId: "team-voting-app-996ef",
  storageBucket: "team-voting-app-996ef.appspot.com",
  messagingSenderId: "642462708631",
  appId: "1:642462708631:web:287b3198fb6fa363de8ad2"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();