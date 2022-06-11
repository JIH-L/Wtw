// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXGE33lUaXzdBDdDhPQj3_7nt7Q9s-5PM",
  authDomain: "wtwproject-353003.firebaseapp.com",
  projectId: "wtwproject-353003",
  storageBucket: "wtwproject-353003.appspot.com",
  messagingSenderId: "211821626071",
  appId: "1:211821626071:web:69b025b1b39ba888ae6692",
  measurementId: "G-LRESBR7DF0"
};

// Initialize Firebase
const firsebaseAPP = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firsebaseAPP;