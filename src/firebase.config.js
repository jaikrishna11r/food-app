import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAOVjrOTr3hmBp3oi-lGxovhmyd2MriRR4",
    authDomain: "restaurantapp-df29e.firebaseapp.com",
    databaseURL: "https://restaurantapp-df29e-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-df29e",
    storageBucket: "restaurantapp-df29e.appspot.com",
    messagingSenderId: "558994687265",
    appId: "1:558994687265:web:89f37bee66719afdb26a60"
  };


  const app= getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app,firestore,storage};