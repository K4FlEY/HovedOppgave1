  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA1mO4AkIGsx99BfRSW5tZa6dx4eA6owbg",
    authDomain: "hovedoppgaver-1.firebaseapp.com",
    projectId: "hovedoppgaver-1",
    storageBucket: "hovedoppgaver-1.appspot.com",
    messagingSenderId: "384045875150",
    appId: "1:384045875150:web:07e404e625e9a2e3d3b59f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

// Lager et nytt dokument i samlinga "elever"
await addDoc(
    collection(db, "elever"), {
      fornavn: "safal",
      etternavn: "kafle",
      telefon: "96737681"
  });

    