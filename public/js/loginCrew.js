// $(document).ready(function () {
//     // Getting references to our form and inputs
//     const loginForm = $("form.login");
//     const emailInput = $("input#name-input");
//     const passwordInput = $("input#id-input");


//     const mysql = require('mysql');
//     const express = require('express');
//     const session = require('express-session');
//     const bodyParser = require('body-parser');
//     const path = require('path');

//     const app = express();

//     app.use(session({
//         secret: 'secret',
//         resave: true,
//         saveUninitialized: true
//     }));
//     app.use(bodyParser.urlencoded({ extended: true }));
//     app.use(bodyParser.json());

//     app.get('/', function (request, response) {
//         response.sendFile(path.join(__dirname + '/loginCrew.html'));
//     });

//     // for action
//     app.post('/loginCrew', function (request, response) {
//         let name = request.body.username;
//         let id = request.body.password;
//         if (name && id) {
//             // check if user exists
//             connection.query('SELECT * FROM employees WHERE Name = ? AND id = ?', [name, id], function (error, results, fields) {
//                 if (results.length > 0) {
//                     request.session.loggedin = true;
//                     request.session.name = name;
//                     response.redirect('/crew.html');
//                 } else {
//                     response.send('Incorrect Username and/or Password!');
//                 }
//                 response.end();
//             });
//         } else {
//             response.send('Please enter Name and ID!');
//             response.end();
//         }
//     });
// });

$(document).ready(function () {


    // Getting references to our form and inputs
    const loginForm = $("form.login");
    const nameInput = $("input#name-input");
    const idInput = $("input#id-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function (event) {
        event.preventDefault();
        const userData = {
            Name: nameInput.val().trim(),
            id: idInput.val().trim()
        };

        if (!userData.Name || !userData.id) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.Name, userData.id);
        nameInput.val("");
        idInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(Name, id) {
        $.post("/api/loginCrew", {
            Name: Name,
            id: id
        })
            .then((res) => {
                console.log(res);
                
                    if (res) {
                        window.location.replace("/crews");
                    }
                    else {
                        alert("Incorrect Name or Id! Try Again")
                    }
                    res.end();

            })
            .catch(function (err) {
                console.log(err);
            });
    };
});



