import firebase from'firebase';
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDGAc1PJlL2H6Qv7eENoriXDLFN1YjPYM4",
    authDomain: "todo-app-notes.firebaseapp.com",
    projectId: "todo-app-notes",
    storageBucket: "todo-app-notes.appspot.com",
    messagingSenderId: "749261411579",
    appId: "1:749261411579:web:0ab26c252646028b348c5e",
    measurementId: "G-NGFF9VP2W9"
});
const db = firebaseApp.firestore();
export default db;