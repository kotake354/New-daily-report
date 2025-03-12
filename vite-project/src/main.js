// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore, collection, getDocs, getDoc } from "firebase/00 firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPFf_XvP0IwT9xD8gpL_Lq6X6f-H_p008",
  authDomain: "new-daily-report-78ae7.firebaseapp.com",
  projectId: "new-daily-report-78ae7",
  storageBucket: "new-daily-report-78ae7.firebasestorage.app",
  messagingSenderId: "376776677826",
  appId: "1:376776677826:web:da35e7a543502ea530de5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Cloud Firestoreの初期化
const db = getFirestore(app);

//Coloud Firestoreから習得したデータを表示する
const fetchHistoryDate =async () => {
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

//Cloud Fireestoreから取得したデータを表示する
if(document.getElementById("js-history")){
    fetchHistoryDate(getDocs, collection,db);
}

//Cloud Firestoreにデータを送信する
const subumitDate = async (e) => {
    e.preventDefault();
    const formDate = new FormDtae(e.target);

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
if(document.getElementById("js-form")){
    document.getElementById("js-form").addEventListener("submit",(e) => subumitDate(e, addDoc, collection,db));
}