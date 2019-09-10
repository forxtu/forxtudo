import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCj8xiz8jIcbNwGIMqnDceXOcP8lPAn_Bc",
  authDomain: "forxtudo.firebaseapp.com",
  databaseURL: "https://forxtudo.firebaseio.com",
  projectId: "forxtudo",
  storageBucket: "",
  messagingSenderId: "1058257577093",
  appId: "1:1058257577093:web:5bf91544d52ed9d510f5ec"
};

const authConfig = firebase.initializeApp(firebaseConfig);

export default authConfig;
