// Import the functions you need from the SDKs you need

  // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
   import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
   import { initializeAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
   import { initializeAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

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
  // firebase.initializeApp(firebaseConfig);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
   const auth = initializeAuth(app);
   const analytics = initializeAnalytics(app);


   export { app, auth, analytics };

 //home.html
document.getElementById("loginForm").addEventListener("submit", (event)=> {
  event.preventDefault();
})


auth.onAuthStateChanged((user) => {
  if(user){
    location.replace("game.html")
  }
})



//problem with not user function. if not user is enabled from the start
auth.onAuthStateChanged((user) => {
  if(!user){
    location.replace("home.html")
  }else{
    document.getElementById("user").innerHTML = "Hello, "+user.email;
  }
})


function login(){
  
const loginemail =  document.getElementById("login-email").value;
const loginpassword =  document.getElementById("login-password").value;
auth.signInWithEmailAndPassword(loginemail, loginpassword)
.catch((error) => {
  document.getElementById("error").innerHTML = error.message;
})

}




