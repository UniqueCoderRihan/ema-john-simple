// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqxDYdtPO2MmwNVETASX9TgXhhK8psccY",
  authDomain: "ema-john-simple-auth-f1872.firebaseapp.com",
  projectId: "ema-john-simple-auth-f1872",
  storageBucket: "ema-john-simple-auth-f1872.appspot.com",
  messagingSenderId: "580250551518",
  appId: "1:580250551518:web:638ddd54fa22eef14cee4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;