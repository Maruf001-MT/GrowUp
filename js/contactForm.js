// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCry5u0CVEsm8mPFWRbwGTxSaqHJo2GHW4",
    authDomain: "projectrequest-growup.firebaseapp.com",
    projectId: "projectrequest-growup",
    storageBucket: "projectrequest-growup.appspot.com",
    messagingSenderId: "671933539488",
    appId: "1:671933539488:web:7ecef729bcd800babf95c5",
    measurementId: "G-JVY7HY82EC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  import {getDatabase, ref, set, child, update, remove}
  from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"

  const db = getDatabase();

  //----------------reference---------------------//

  var name = document.getElementById("contactName");
  var email = document.getElementById("contactEmail");
  var subject = document.getElementById("contactSubject");
  var message = document.getElementById("contactMessage");

  var insertBtn = document.getElementById("submitBtn");

  //---------------insert data function-------------//

  function insertData(){
      set(ref(db, "ContactInfo/" +name.value),{
        Name: name.value,
        Email: email.value,
        Subject: subject.value,
        Message: message.value
      })
      .then(()=>{
          alert("Submitted Success");
      })
      .catch((error)=>{
          alert("Error"+error);
      });
  }

  insertBtn.addEventListener('click', insertData);
