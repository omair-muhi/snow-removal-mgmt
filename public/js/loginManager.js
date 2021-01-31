$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var nameInput = $("input#name-input");
    var passwordInput = $("input#password-input");
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            username: nameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.username || !userData.password) {
            alert("You Must Enter Username and Password")
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.username, userData.password);
        nameInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(username, password) {
        $.post("/api/login", {
                username: username,
                password: password
            })
            .then(function() {
                window.location.replace("/managerOverviewMain");
                // If there's an error, log the error
            })
            .catch(function(err) {
                alert("Wrong User Name or Password")
                console.log(err);
            });
    }
});



// $(document).ready(function() {


//     // Getting references to our form and inputs
//     const loginForm = $("form.login");
//     const nameInput = $("input#name-input");
//     const idInput = $("input#id-input");

//     // When the form is submitted, we validate there's an email and password entered
//     loginForm.on("submit", function(event) {
//         event.preventDefault();
//         const userData = {
//             Name: nameInput.val().trim(),
//             id: idInput.val().trim()
//         };

//         if (!userData.Name || !userData.id) {
//             return;
//         }

//         // If we have an email and password we run the loginUser function and clear the form
//         loginManager(userData.Name, userData.id);
//         nameInput.val("");
//         idInput.val("");
//     });

//     function loginManager(Name, id) {
//         $.post("/api/login", {
//                 Name: Name,
//                 id: id
//             })
//             .then((res) => {
//                 console.log(res);

//                 if (res.Admin) {
//                     window.location.replace("/managerOverviewMain");
//                 } else if (res) {
//                     alert(`${res.Name} does not have access to this Page`);
//                     window.location.replace("/");
//                 } else {
//                     alert("Incorrect Name or Id! Try Again")
//                 }
//                 res.end();
//             })
//             .catch(function(err) {
//                 console.log(err);
//             });
//     };
// });