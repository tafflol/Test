var firebaseConfig = {
    apiKey: "AIzaSyCoSrgV83PuebqAPWeGd-1veMrgiTsPrRg",
    authDomain: "kwitter-e276f.firebaseapp.com",
    databaseURL: "https://kwitter-e276f-default-rtdb.firebaseio.com",
    projectId: "kwitter-e276f",
    storageBucket: "kwitter-e276f.appspot.com",
    messagingSenderId: "782474844890",
    appId: "1:782474844890:web:7de29cd2d8e87550a5e3e3"
  };
  
firebase.initializeApp(firebaseConfig);
  


   function addUser()
   {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   }