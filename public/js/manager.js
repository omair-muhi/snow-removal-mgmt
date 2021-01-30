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




//     const nameInput = document.getElementById('user');
//     const jobsList = document.getElementById('jobsList');

//     // Grab all the jobs
//     const getJobs = () => {
//         $.get('/api/jobs', {

//         })
//             .then((data) => {
//                 console.log(data);
//                 const rowsToAdd = [];
//                 for (let i = 0; i < data.length; i++) {
//                     rowsToAdd.push(createJobsRow(data[i]));
//                 }
//                 renderJobsList(rowsToAdd);
//                 nameInput.value = '';
//             })
//             .catch((error) => console.error('Error:', error));
//     };

//     // Create list row for jobs
//     const createJobsRow = (jobData) => {
//         const tr = document.createElement('tr');
//         tr.setAttribute('data-job', JSON.stringify(jobData));

//         // Set each job's ID on the element itself
//         tr.id = jobData.id;
//         tr.className = "tableRow";

//         const td = document.createElement('td');
//         const td2 = document.createElement('td');
//         td.textContent = jobData.client_name;
//         td2.textContent = jobData.location;
//         tr.appendChild(td);
//         tr.appendChild(td2);

//         // Return the table row
//         return tr;
//     };

//     // Helper function to render content when there are no authors
//     const renderEmpty = () => {
//         const alertDiv = document.createElement('div');
//         alertDiv.classList.add('alert', 'alert-danger');
//         alertDiv.textContent = 'No Jobs Exist Contact Management';
//         alertDiv.style.marginRight = '5px';
//         return alertDiv;
//     };

//     const renderJobsList = (rows) => {

//         if (rows.length) {
//             if (document.getElementById('removeMe')) {
//                 document.getElementById('removeMe').remove();
//             }
//             rows.forEach((row) => jobsList.append(row));
//         } else {
//             document.querySelector('.job-container').appendChild(renderEmpty());
//         }
//     };
//     // Get the list of jobs
//     getJobs();

// });