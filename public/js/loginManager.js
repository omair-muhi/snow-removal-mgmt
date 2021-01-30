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
        loginManager(userData.Name, userData.id);
        nameInput.val("");
        idInput.val("");
    });

    function loginManager(Name, id) {
        $.post("/api/login", {
            Name: Name,
            id: id
        })
            .then((res) => {
                console.log(res);

                if (res.Admin) {
                    window.location.replace("/managerOverviewMain");
                }
                else if (res) {
                    alert(`${res.Name} does not have access to this Page`);
                    window.location.replace("/");
                }
                else {
                    alert("Incorrect Name or Id! Try Again")
                }
                // res.end();
            })
            .catch(function (err) {
                console.log(err);
            });
    };
});
