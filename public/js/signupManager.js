$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var nameInput = $("input#name-input");
    var passwordInput = $("input#password-input");

    // When the signup button is clicked, we validate the username and password are not blank
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            username: nameInput.val().trim(),
            password: passwordInput.val().trim()
        };
        if (!userData.username || !userData.password) {
            return;
        }
        // If we have an username and password, run the signUpUser function
        signUpUser(userData.username, userData.password);
        nameInput.val("");
        passwordInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the managers page
    // Otherwise we log any errors
    function signUpUser(username, password) {
        console.info("******Executing sign up for user", username);
        console.info("********Executing sign up for password", password);

        $.post("/api/signup", {
            username: username,
                password: password
            })
            .then(function(data) {
                console.info("******User successfully authenticated*******", username);
                window.location.replace("/managerOverviewMain");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});