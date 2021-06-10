//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDKO4WM4Rkz_00HjbwnAkzSBfUOFhCTTSw",
      authDomain: "kwitter-app-b7d6e.firebaseapp.com",
      databaseURL: "https://kwitter-app-b7d6e-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-b7d6e",
      storageBucket: "kwitter-app-b7d6e.appspot.com",
      messagingSenderId: "619182303061",
      appId: "1:619182303061:web:fe07cd1863381436a7f1dc",
      measurementId: "G-6HD47YSTF6"
    };

user_name=localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}