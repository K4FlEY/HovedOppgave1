


// const username = document.getElementById("signup");

// const password = document.getElementById("signup-password");
// const email = document.getElementById("input-email");



// signup.addEventListener("submit", async(e) => {
//   e.preventDefault();
//   const signup = form['signupusername'].value;
//   const signuppassword = form['signuppassword'].value;
//   const email = form['signupemail'].value;

// })




// // gpt
// const auth = firebase.auth();

//       function loginUserHandler(event) {
//         event.preventDefault();
//         const email = document.getElementById("login-username").value;
//         const password = document.getElementById("login-password").value;
//         auth.signInWithEmailAndPassword(email, password)
//           .then(userCredential => {
//             // Handle successful login
//             const user = userCredential.user;
//             console.log("User logged in:", user);
//           })
//           .catch(error => {
//             // Handle login error
//             console.error("Login error:", error.message);
//           });
//       }

//       document.getElementById("signup-form").addEventListener("submit", function(event) {
//         event.preventDefault();
//         const email = document.getElementById("signup-email").value;
//         const password = document.getElementById("signup-password").value;
//         auth.createUserWithEmailAndPassword(email, password)
//           .then(userCredential => {
//             // Handle successful signup
//             const user = userCredential.user;
//             console.log("User signed up:", user);
//           })
//           .catch(error => {
//             // Handle signup error
//             console.error("Signup error:", error.message);
//           });
//       });