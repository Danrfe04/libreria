import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, collection, getDoc, doc, query, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBSO_FPSiMiGGNjWIbtyxtxCxmJBj2SBRE",
  authDomain: "react-danielleon.firebaseapp.com",
  projectId: "react-danielleon",
  storageBucket: "react-danielleon.appspot.com",
  messagingSenderId: "68765507894",
  appId: "1:68765507894:web:82dff524d73ea7ae09d397"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase)

export function testDataBase (){
    console.log(appFirestore)
}
export async function getItems(){
    const prodCollection = collection(appFirestore, "books");
    const booksSnapshot = await getDocs(prodCollection);  
    let respuesta = booksSnapshot.docs.map(doc => { 
        return{
        ...doc.data(),
        id: doc.id
    }
});
return respuesta;
}
export async function getItem(itemId){
    const docRef = doc(appFirestore,"books", itemId);  
    const docSnapshot = await getDoc(docRef);
        return{
            id: docSnapshot.id,...docSnapshot.data()
        }
};

export async function getItemCategory(idCategory){
    const booksCollection = collection(appFirestore,"books");
    const q = query (booksCollection, where ("category", "==", idCategory));
    const booksSnapshot = await getDocs(q);
    let respuesta = booksSnapshot.docs.map (doc => {
        return{
            ...doc.data(),
            id: doc.id
        }
    })
    return respuesta
}
export default appFirestore