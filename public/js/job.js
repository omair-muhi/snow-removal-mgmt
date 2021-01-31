document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const updateActive = document.querySelectorAll('.job-done');

    if (updateActive) {
        updateActive.forEach((button) => {
            button.addEventListener('click', (e) => {

                const id = e.target.getAttribute('data-id');
                const newActiveState = {
                    active: false,
                };
                const newAssignedState = {
                    assigned: false,
                };
                // mark job as complete
                console.log("MARK JOB AS COMPLETE!!!");
                fetch(`/api/jobs/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    // make sure to serialize the JSON body
                    body: JSON.stringify(newActiveState),
                }).then((response) => {
                    // Check that the response is all good
                    if (response.ok) {
                        // free up employee who was assigned to this job
                        console.log("MARK EMPLOYEE AS AVAILABLE!!!");
                        location.reload('/jobMain');
                    } else {
                        alert('something went wrong jobcomplete!');
                    }
                });
                // free employee
                fetch(`/api/crews/freeEmployee/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    // make sure to serialize the JSON body
                    body: JSON.stringify(newAssignedState),
                }).then((response) => {
                    // Check that the response is all good
                    console.log("CHECK THAT RESPONSE IS GOOD");
                    // console.log(response);
                    if (response.ok) {
                        location.reload('/jobMain');
                    } else {
                        alert('something went wrong employeecomplete!');
                    }
                });
            });
        });
    }
});
