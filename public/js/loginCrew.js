$(document).ready(function () {
    // Getting references to our form and inputs
    const loginForm = $("form.login");
    const emailInput = $("input#name-input");
    const passwordInput = $("input#id-input");


    const mysql = require('mysql');
    const express = require('express');
    const session = require('express-session');
    const bodyParser = require('body-parser');
    const path = require('path');

    const app = express();

    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get('/', function (request, response) {
        response.sendFile(path.join(__dirname + '/loginCrew.html'));
    });

    // for action
    app.post('/loginCrew', function (request, response) {
        let name = request.body.username;
        let id = request.body.password;
        if (name && id) {
            // check if user exists
            connection.query('SELECT * FROM employees WHERE Name = ? AND id = ?', [name, id], function (error, results, fields) {
                if (results.length > 0) {
                    request.session.loggedin = true;
                    request.session.name = name;
                    response.redirect('/crew.html');
                } else {
                    response.send('Incorrect Username and/or Password!');
                }
                response.end();
            });
        } else {
            response.send('Please enter Name and ID!');
            response.end();
        }
    });
});

