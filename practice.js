 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAUaMIC5mHMckjugs6pupH6ETBbxpFP7Hs",
    authDomain: "kwitter-e41eb.firebaseapp.com",
    databaseURL: "https://kwitter-e41eb-default-rtdb.firebaseio.com",
    projectId: "kwitter-e41eb",
    storageBucket: "kwitter-e41eb.appspot.com",
    messagingSenderId: "802512642538",
    appId: "1:802512642538:web:76dab0ee58117fddd79293"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function add_user (){
   aun = document.getElementById("input11").value;
   firebase.database().ref("/").child(aun).update({
       purpose:"adding user"
   });
}