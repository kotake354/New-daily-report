// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { fetchHistoryData } from "./my-modules/fetch-history-data.js";
import { submitData } from "./my-modules/submit-data.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Cloud Firestoreの初期化
const db = getFirestore(app);

//Coloud Firestoreから習得したデータを表示する
const fetchHistoryData = async () => {
let tags = "";

//reportsコレクションのデータを取得
const querySnapshot = await getDocs(collection(db, "reports"));

//データをテーブル表の形式に合わせてHTMLに挿入
querySnapshot.forEach((doc) => {
    console.log(`${doc.id}=> ${doc.date()}`);

    tags += `<tr><td>${doc.date().date}</td><td>${doc.date().name}</td><td>${doc.date().work}</td><td/>${doc.date().comment}</td></tr>`
});
document.getElementById("js-history").innerHTML = tags;
};

//Cloud Firestoreから取得したデータを表示する
if(document.getElementById("js-history")) {
    fetchHistoryData(getDocs, collection, db);
}

//Cloud Firestoreにデータを送信する
const submitData = async (e) => {
    e.preventDefault();
    const formDate = new FormData(e.target);

    try {
        const docRef = await addDoc(collection(db,"reports"),{
            date: new Date(),
            name: formDate.get("name"),
            work: formDate.get("comment")
    });
    console.log("Document written with ID: ", docRef.ID);
    }catch (e) {
    console.error("Error adding document: ", e);
    }
};
//Cloud Firestoreにデータを送信する
if(document.getElementById("js-form")) {
    document.getElementById("js-form").addEventListener("submit", (e) => submitData(e, addDoc, collection, db));
}