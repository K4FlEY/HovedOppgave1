// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1mO4AkIGsx99BfRSW5tZa6dx4eA6owbg",
  authDomain: "hovedoppgaver-1.firebaseapp.com",
  projectId: "hovedoppgaver-1",
  storageBucket: "hovedoppgaver-1.appspot.com",
  messagingSenderId: "384045875150",
  appId: "1:384045875150:web:07e404e625e9a2e3d3b59f"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Getting all the objects of HTML
let firstname = document.getElementById("signupfirstname");
let lastname = document.getElementById("signuplastname");
let email = document.getElementById("signupemail");
let password = document.getElementById("signuppassword");
let loginemail = document.getElementById("loginemail");
let loginpassword = document.getElementById("loginpassword");

// Function to store data
//signup funtion
window.signup = function (e) {
  e.preventDefault();
  var obj = {
    firstname: signupfirstname.value,
    lastname: signuplastname.value,
    email: signupemail.value,
    password: signuppassword.value,
  };

  createUserWithEmailAndPassword(auth, obj.email,obj.password)
    .then(function (success) {
      alert("Signup Successfully");
      
    })
    .catch(function (err) {
      alert("Error: " + err.message);
    });

  console.log(obj);
};




//login function
 window.login = function(e){
  e.preventDefault();
  var obj = {
    email: loginemail.value,
    password: loginpassword.value
  };
  signInWithEmailAndPassword(auth, obj.email,obj.password)
  .then(function(success){
   
    alert("loggined successfully")
    window.location.replace("game.html")
  })
  .catch(function(err){
    alert("login error")
  });
  
  console.log(obj)
}