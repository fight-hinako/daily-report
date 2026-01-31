console.log("🔥 main.js TOP 実行");
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,  collection, getDocs, addDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// fecth-history-data.jsのexportを取得する
import { fetchHistoryData } from "./my-modules/fecth-history-data";

// submit-data.jsのexportを取得する
import { submitData } from "./my-modules/submit-data";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  appId: import.meta.env.VITE_APP_ID,
  messagingSenderId: import.meta.env.VITE_MEASUREMENT_ID
};
// 
// VITE_MESSAGING_SENDER_ID=import.meta.env.VITE_MESSAGING_SENDER_ID,
// VITE_APP_ID=import.meta.env.VITE_APP_ID,
// VITE_MEASUREMENT_ID=import.meta.env.VITE_MEASUREMENT_ID


// Initialize Firebase
// めも　Firebaseに接続する「入口」
const app = initializeApp(firebaseConfig);

// Firestore の初期化
const db = getFirestore(app);



if(document.getElementById("js-history")) {
     fetchHistoryData(getDocs, collection, db);
}


if(document.getElementById("js-form")) {
        document.getElementById("js-form").addEventListener("submit", (e) => submitData(e,addDoc,collection,db));
}

