// probelem-- hints are shown even when forms are valid
// solution show and hide at appropriate times

//1 hide hints
$('form span').hide();

var $password = $('#password');
var $confirm = $('#confirm_password');


function isPasswordValid() {
  return $password.val().length > 8;
}

function passwordsMatch() {
  return $password.val() === $confirm.val();
}

function passwordEvent() {
   //find if password is valid hide if valid else show hint
  if(isPasswordValid()) {
      //hide hint if valid

     $('#password').next().hide();

   } else {

      //show hint if not
     $('#password').next().show();
   }
}



function passwordConfirmPassword (){

  if(passwordsMatch()){

      $confirm.next().hide();

     } else {

       $confirm.next().show();
     }
}


function canSubmit() {
  return isPasswordValid() && passwordsMatch();
}

function enableSubmitEvent() {
   $('#submit').prop("disabled", !canSubmit())
}

//events

$password.focus(passwordEvent).keyup(passwordEvent).keyup(passwordConfirmPassword).keyup(enableSubmitEvent);

$confirm.focus(passwordConfirmPassword).keyup(passwordConfirmPassword).keyup(enableSubmitEvent);

enableSubmitEvent();
