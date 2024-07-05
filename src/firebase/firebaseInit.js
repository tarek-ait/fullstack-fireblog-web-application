import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBcY7H8qnDEt1ARpWIUwWzdoGe360k_ykk",
  authDomain: "fireblogvueapplication.firebaseapp.com",
  projectId: "fireblogvueapplication",
  storageBucket: "fireblogvueapplication.appspot.com",
  messagingSenderId: "982149155318",
  appId: "1:982149155318:web:1fd906422ef3cf23e21fd7"
};

  // initialize the application 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export{ timestamp };
  
  const db = firebaseApp.firestore();

  export default db;
  // adding the firebase configuration into our vue application  