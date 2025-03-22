export const subumitDate = async (e, addDoc, collection, db) => {
    e.preventDefault();
    const formDate =  new FormDate(e,taget);

    try{
        const docRef = await addDoc(collection(db, "reports"),{
            date: new date (),
            name: formDate.get("name"),
            work: formDate.get("work"),
            Comment: formDate.get("comment")
    });
    console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
