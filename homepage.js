var homePage = {};

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
          window.location.replace("index.html");
        }
    });

function logOut (){
    firebase.auth().signOut();
}
homePage.logOut = logOut;

})()