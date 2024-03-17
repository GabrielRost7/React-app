// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBErdThlWIKjpyIz-1ZsUimzxcsw6DUt1g",
  authDomain: "datosecommercereact.firebaseapp.com",
  projectId: "datosecommercereact",
  storageBucket: "datosecommercereact.appspot.com",
  messagingSenderId: "77839777976",
  appId: "1:77839777976:web:b51e57481d0be73283b44d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);