import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhDK2_0h4OIaOhzLYcu1flbPKYyWPywSg",
    authDomain: "division2-gearset-builder.firebaseapp.com",
    databaseURL: "https://division2-gearset-builder.firebaseio.com",
    projectId: "division2-gearset-builder",
    storageBucket: "division2-gearset-builder.appspot.com",
    messagingSenderId: "486053981343",
    appId: "1:486053981343:web:965b6fe564276118"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence();

export default firebase;
