const firebaseConfig = {
  apiKey: "AIzaSyAxxxxxxx",
  authDomain: "blackstar-xxxx.firebaseapp.com",
  projectId: "blackstar-xxxx",
  storageBucket: "blackstar-xxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefg"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch(err => document.getElementById("error").innerText = err.message);
}

function logout() {
  auth.signOut().then(() => window.location.href = "login.html");
}