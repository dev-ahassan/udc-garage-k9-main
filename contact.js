// Reference messages collection


  var messagesRef = firebase.database().ref('Inquiries');
  
  // Listen for form submit
  document.getElementById('contact').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
    
  
    // Get values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email')
    var phone = getInputVal('phone');
    var phone = getInputVal('idNum');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(fname, lname, email, phone, idNum, subject, message);
  
  
  
    // Clear form
    // document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname, lname, email, phone, idNum, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      FirstName: fname,
      LastName:lname,
      udcEmail:email,
      Phone:phone,
      nNumber:idNum,
      subject:subject,
      Message:message,

    });
  }



$(function() {
  
  // when the form is submitted
  $("#contact").on("submit", function(e) {
    $("#contact").validator();
    // if the validator does not prevent form submit
    if (e.isDefaultPrevented()) {
      var messageAlert = "alert-success";
      var messageText = "Your Message was Sucessfuly Sent, thank you. We will get back to you soon.";

      // let's compose Bootstrap alert box HTML
      var alertBox =
        '<div class="alert ' +
        messageAlert +
        ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
        messageText +
        "</div>";

      // If we have messageAlert and messageText
      if (messageAlert && messageText) {
        // inject the alert to .messages div in our form
        $("#contact .messages").html(alertBox);

        // empty the form
        $("#contact")[0].reset();
      }

      return false;
    }
  });
});





