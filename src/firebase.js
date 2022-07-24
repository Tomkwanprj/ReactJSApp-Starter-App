import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDL0LTlSd01IMge5w6rM7JtMJR23qLMQhM",
  authDomain: "todolist-99f60.firebaseapp.com",
  databaseURL: "https://todolist-99f60-default-rtdb.firebaseio.com",
  projectId: "todolist-99f60",
  storageBucket: "todolist-99f60.appspot.com",
  messagingSenderId: "62534156859",
  appId: "1:62534156859:web:4372162665778d509a921e",
  measurementId: "G-YYFWBG6FGR",
});

export { firebaseConfig as firebase };
