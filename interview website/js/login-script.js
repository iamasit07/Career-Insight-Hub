// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMV0JPJfYPRDCQR7bxdJqdjYWPh9BZq64",
  authDomain: "career-insight-hub.firebaseapp.com",
  databaseURL: "https://career-insight-hub-default-rtdb.firebaseio.com",
  projectId: "career-insight-hub",
  storageBucket: "career-insight-hub.appspot.com",
  messagingSenderId: "127626713086",
  appId: "1:127626713086:web:6bec1ec56620a1fa7b92af",
  measurementId: "G-QNXS8MZX2J"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
// Remove the declaration of 'app' variable
// const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

function register() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var fullname = document.getElementById("fullname").value;
    var contact = document.getElementById("contact").value;
    var resume = document.getElementById("resume").value;
    
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.message));
    alert("Registered");
}

function validate_email(){
    var email = document.getElementById("email").value;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(emailReg.test(email)){
        return true;
    }
    else{
        alert("Invalid Email");
        return false;
    }
}

function validate_password(){
    var password = document.getElementById("password").value;
    if(password.length < 6){
        alert("Password should be atleast 6 characters");
        return false;
    }
    else{
        return true;
    }
}

function validate_fullname(){
    var fullname = document.getElementById("fullname").value;
    if(fullname.length < 3){
        alert("Fullname should be atleast 3 characters");
        return false;
    }
    else{
        return true;
    }
}

function validate_contact(){
    var contact = document.getElementById("contact").value;
    if(contact.length < 10){
        alert("Contact should be atleast 10 characters");
        return false;
    }
    else{
        return true;
    }
}

function validate_resume(){
    var resume = document.getElementById("resume").value;
    if(resume.length < 1){
        alert("Please upload your resume");
        return false;
    }
    else{
        return true;
    }
}

function validate(){
    if(validate_email() && validate_password() && validate_fullname() && validate_contact() && validate_resume()){
        register();
    }
}

function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.message));
    alert("Logged In");
}

function logout(){
    auth.signOut();
    alert("Logged Out");
}

auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        alert("Active User " + email);
    }
    else{
        alert("No Active User");
    }
});

function save(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var fullname = document.getElementById("fullname").value;
    var contact = document.getElementById("contact").value;
    var resume = document.getElementById("resume").value;
    
    var user = {
        email: email,
        password: password,
        fullname: fullname,
        contact: contact,
        resume: resume
    }
    
    var database = db.ref('users');
    database.push(user);
    alert("Data Saved");
}

function read(){
    var database = db.ref('users');
    database.on('value', function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var childData = childSnapshot.val();
            console.log(childData);
        });
    });
}

function update(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var fullname = document.getElementById("fullname").value;
    var contact = document.getElementById("contact").value;
    var resume = document.getElementById("resume").value;
    
    var data = {
        email: email,
        password: password,
        fullname: fullname,
        contact: contact,
        resume: resume
    }
    
    var database = db.ref('users');
    database.set(data);
    alert("Data Updated");
}