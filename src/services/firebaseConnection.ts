import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbva-c_kpBckc_EbyisrmNfDQodQuFSK4",
  authDomain: "tarefas-a04ec.firebaseapp.com",
  projectId: "tarefas-a04ec",
  storageBucket: "tarefas-a04ec.appspot.com",
  messagingSenderId: "357028213058",
  appId: "1:357028213058:web:6a52756fab33542f9098db"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
