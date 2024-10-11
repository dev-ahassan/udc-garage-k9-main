
  var messagesRef = firebase.database().ref('Incident Reports');
  
  // Listen for form submit
  document.getElementById('incidentReport').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
    
  
    // Get values
    var date = getInputVal('date');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
    var file = getInputVal('file');
   ;
  
    // Save message
    saveMessage(date, subject, message, file);
  
    // Show alert
    // document.querySelector('.alert').style.display = 'block';
  
    // // Hide alert after 3 seconds
    // setTimeout(function(){
    //   document.querySelector('.alert').style.display = 'none';
    // },3000);
  
    // Clear form
    document.getElementById('incidentReport').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(date, subject, message, file){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
     
      date:date,
      subject:subject,
      message:message,
      file:file,
      
    }, onSubmission);
  }

  function onSubmission(error){
    if(error){
      alert("record not submitted please retry.. :(");
    }
    else  alert ("Your Form has been anonymously submitted and we will look into this further. Thank You!");
  }