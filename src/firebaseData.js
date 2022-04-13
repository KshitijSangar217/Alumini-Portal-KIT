// Import the functions you need from the SDKs you need

import firebase from 'firebase';

/*
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from 'firebase/database'
*/
const firebaseConfig = {
  apiKey: "AIzaSyAue1XJyF4ClRUMOlvQ5VkBsYuaXBF6rfI",
  authDomain: "alumini-portal-kit.firebaseapp.com",
  databaseURL: "https://alumini-portal-kit-default-rtdb.firebaseio.com",
  projectId: "alumini-portal-kit",
  storageBucket: "alumini-portal-kit.appspot.com",
  messagingSenderId: "583725902669",
  appId: "1:583725902669:web:0d0af9af9d2f2026bbe504",
  measurementId: "G-00R73SLCVH"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
/*
const dbFireStore = firebase.firestore();
const auth = firebase.auth();
export {database, dbFireStore, auth};
*/
export default database;





/*
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;
*/

/*
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
//const analytics = getAnalytics(app);
export const refDB = ref(database, "refDB");
*/