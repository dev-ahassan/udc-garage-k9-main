var records = {};


var firebase = app_fireBase;

(function(){
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user){
  if (user) {
      // user is signed in.
      uid = user.uid;

  }else{
    //redirect to login page
    uid = null;
    window.location.replace("adminlogin.html");
  }
});
function logOut (){
    firebase.auth().signOut();
  }
  records.logOut = logOut;
  
  
  })()