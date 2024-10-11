var purchase = {};


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
purchase.logOut = logOut;

})()

  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Passes Purchased');
  
  // Listen for form submit
  document.getElementById('purchaseForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
    
  
    // Get values
    var fname = getInputVal('fname');
    var mname = getInputVal('mname');
    var lname = getInputVal('lname');
    var email = getInputVal('email')
    var IDNum = getInputVal('IDNum');
    var semester= getInputVal('semester');
    var overnight= getInputVal('overnight');
    var make = getInputVal('make');
    var model = getInputVal('model');
    var year = getInputVal('year');
    var color = getInputVal('color');
    var plateNum = getInputVal('plateNum');
    var state = getInputVal('state');

  
    // Save message
    saveMessage(fname, mname, lname, email, IDNum, semester, overnight, make, model, year, color, plateNum, state);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('purchaseForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname, mname, lname, email, IDNum, semester, overnight, make, model, year, color, plateNum, state){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      FirstName: fname,
      MiddleName: mname,
      LastName:lname,
      UDCEmail:email,
      studentID:IDNum,
      SemesterType:semester,
      Overnightstatus:overnight,
      carMake:make,
      carModel: model,
      CarYear:year,
      VehicleColor:color,
      LicensePlate:plateNum,
      State:state,
    }, onSubmission);
  }

  function onSubmission(error){
    if(error){
      alert("record not submitted please retry.. :(");
    }
    else  alert ("Your Parking Pass Purchase Form has been submitted succesfully");
  }