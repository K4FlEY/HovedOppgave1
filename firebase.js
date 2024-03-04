// Import the functions you need from the SDKs you need

  // Import the functions you need from the SDKs you need
   //import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
   //import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
   //import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
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



 //index.js
document.getElementById("loginForm").addEventListener("submit", (event)=> {
  event.preventDefault();
})


firebase.auth().onAuthStateChanged((user) => {
  if(user){
    location.replace("game.html")
  }
})


firebase.auth().onAuthStateChanged((user) => {
  if(!user){
    location.replace("home.html")
  }else{
    document.getElementById("user").innerHTML = "Hello, "+user.loginemail
  }
})


function login(){
const loginemail =  document.getElementById("login-email").value
const loginpassword =  document.getElementById("login-password").value
firebase.auth().signInWithEmailAndPassword(loginemail, loginpassword)

}






