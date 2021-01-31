  
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }
    // UPDATE
    const updateAssigned = document.querySelectorAll('.add-to-crew');
    // Set up the event listener for the create button
    if (updateAssigned) {
        console.info("updateAssigned!")
        updateAssigned.forEach((button) => {
            button.addEventListener('click', (e) => {
                console.info("Assign clicked!")
                const emp_id = e.target.getAttribute('data-emp-id');
                const job_id = e.target.getAttribute('data-job-id');
                const newAssignedState = {
                    assigned: true,
                };
                const newCrew = {
                    employee_id: emp_id,
                    job_id: job_id
                };
                // mark employee as assigned
                fetch(`/api/employees/${emp_id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    // make sure to serialize the JSON body
                    body: JSON.stringify(newAssignedState),
                }).then((response) => {
                    // Check that the response is all good
                    if (response.ok) {
                        console.log("Reloading /managerOverviewMain endpoint!")
                        location.reload('/managerOverviewMain');
                    } else {
                        alert('something went wrong!');
                    }
                });
                // mark job as assigned
                fetch(`/api/jobs/${job_id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    // make sure to serialize the JSON body
                    body: JSON.stringify(newAssignedState),
                }).then((response) => {
                    // Check that the response is all good
                    if (response.ok) {
                        console.log("Reloading /managerOverviewMain endpoint!")
                        location.reload('/managerOverviewMain');
                    } else {
                        alert('something went wrong!');
                    }
                });
                // create a new crew record
                fetch(`/api/crews`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    // make sure to serialize the JSON body
                    body: JSON.stringify(newCrew),
                }).then((response) => {
                    console.log(response);
                    // Check that the response is all good
                    if (response.ok) {
                        console.log("Reloading /managerOverviewMain endpoint!")
                        location.reload('/managerOverviewMain');
                    } else {
                        alert('something went wrong!');
                    }
                });
            });
        });
    }

});

