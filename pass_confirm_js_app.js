// Problem: Hints are shown even when form is valid
// Solution: Hide and show them when needed
var $password = $("#password");
var $confirm_password = $("#confirm_password");
var $username = $("#username");
// Hide Hints
$("form span").hide();

function isPasswordValid() {
    return $password.val().length > 8;
}

function arePasswordsMatching() {
    return $password.val() === $confirm_password.val();
}

function isUsernamePresent() {
    return !($username.val() === "" || $username.val() === null);
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent(){
    // Find out if the password is valid
    if (isPasswordValid()) {
        // Hide Hints if valid
        $password.next().hide();
        enableSubmitEvent();
    } else {
        // Else show hint
        $password.next().show();
    }
}

function confirmPasswordEvent(){
    // Find out if the password and the confirmation are matched
    if (arePasswordsMatching()) {
        // Hide hint
        $confirm_password.next().hide();
        enableSubmitEvent();
    } else {
        // else show
        $confirm_password.next().show();
    }
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
}

$username.focus(canSubmit()).keyup(canSubmit());


// When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).blur(passwordEvent).keyup(confirmPasswordEvent).blur(confirmPasswordEvent).keyup(enableSubmitEvent());

// When event happens on confirmation input
$confirm_password.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).blur(confirmPasswordEvent).keyup(enableSubmitEvent());

enableSubmitEvent();