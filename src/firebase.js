
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBJqytd9DCBwTdhr-qqqDRJfj9-KK2L8A",
  authDomain: "netflix-clone-3dd5d.firebaseapp.com",
  projectId: "netflix-clone-3dd5d",
  storageBucket: "netflix-clone-3dd5d.appspot.com",
  messagingSenderId: "614300446673",
  appId: "1:614300446673:web:2dcfb8a2bd5a450b81faf0"
}; 


  const firebaseApp = initializeApp(firebaseConfig);
 
  const db= getFirestore(firebaseApp)
  //firestore is actually a realtime database ,it's going to allow us to keep track of what the user subscription is
  const authApp = getAuth(firebaseApp);
  console.log(authApp)
  export { authApp }
  export default db;

