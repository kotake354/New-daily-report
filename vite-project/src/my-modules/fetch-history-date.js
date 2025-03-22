export const fatchhisoryDate = async (getDocs, collection, db) => {
    let tags ="";

    //reportsコレクションのデータを取得
    const querySnapshot = await getDocs(collection(db, "reports"));

    //データをテーブル表の形式に合わせてHTMLに挿入
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.date()}`);
        tags += `<tr><td>${doc.date().date}</td><td>${doc.date().name}</td><td>${doc.date().work}</td><td>${doc.date().comment}</td><td>`
    });
    document.getElementById("js-history").innerHTML = tags;
};