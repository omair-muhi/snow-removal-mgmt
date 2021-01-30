document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }
    // UPDATE
    const updateActive = document.querySelectorAll('.job-done');

    // Set up the event listener for the create button
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
                        alert('something went wrong!');
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
                        alert('something went wrong!');
                    }
                });
            });
        });
    }
});


// const activeJobs = document.getElementById('tbody');
// const clientName = document.getElementById('client_name');
// const location = document.getElementById('location');

// Grab all the jobs
//     const getJobs = () => {
//         console.log('Get jobs is getting called')
//         $.get('/api/jobs', {

//         })
//             .then((data) => {
//                 console.log(data);
//                 location.textContent = data[0].client_name;
//             })
//             const rowsToAdd = [];
//         for (let i = 0; i < data.length; i++) {
//           rowsToAdd.push(createJobsRow(data[i]));
//         }
//         renderJobs(rowsToAdd);
//         nameInput.value = '';
//       })
//       .catch((error) => console.error('Error:', error));
//   };

//   // Get the list of authors
//   getJobs();
// });




// need to send this into the rows/table

// const addBtn = document.getElementById('add-btn');
// addBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   // All data comes from the input fields
//   const newJob = {
//     client_name: document.getElementById('name').value.trim(),
//     location: document.getElementById('role').value.trim(),

//   };

//   // Send POST request using the fetch API
//   fetch('/api/new', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newJob),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Added new job', data);
//       alert(`Adding Job: ${newCharacter.name}!`);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//       alert(error);
//     });

//   // Dump the content of the input boxes
//   document.getElementById('Client Name').value = '';
//   document.getElementById('Location').value = '';

// });