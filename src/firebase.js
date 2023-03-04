import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE-hghfcy2TmxFoQ8goeg7j7NyAA_mQeE",
  authDomain: "pandao-20230304.firebaseapp.com",
  databaseURL:
    "https://pandao-20230304-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pandao-20230304",
  storageBucket: "pandao-20230304.appspot.com",
  messagingSenderId: "80777809521",
  appId: "1:80777809521:web:0b52c795dbf1c4587315d0",
};

const app = initializeApp(firebaseConfig);

export default app;
