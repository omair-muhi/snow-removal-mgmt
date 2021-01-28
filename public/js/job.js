document.addEventListener('DOMContentLoaded', () => {

    
    const activeJobs = document.getElementById('tbody');
    const clientName = document.getElementById('client_name');
    const location = document.getElementById('location');

    // Grab all the jobs
    const getJobs = () => {
        console.log('Get jobs is getting called')
        $.get('/api/jobs', {

        })
            .then((data) => {
                console.log(data);
                location.textContent = data[0].client_name;
            })
            const rowsToAdd = [];
        for (let i = 0; i < data.length; i++) {
          rowsToAdd.push(createJobsRow(data[i]));
        }
        renderJobs(rowsToAdd);
        nameInput.value = '';
      })
      .catch((error) => console.error('Error:', error));
  };

  // Get the list of authors
  getJobs();
});
           
        


// need to send this into the rows/table

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // All data comes from the input fields
  const newJob = {
    client_name: document.getElementById('name').value.trim(),
    location: document.getElementById('role').value.trim(),
   
  };

  // Send POST request using the fetch API
  fetch('/api/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Added new job', data);
      alert(`Adding Job: ${newCharacter.name}!`);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(error);
    });

  // Dump the content of the input boxes
  document.getElementById('Client Name').value = '';
  document.getElementById('Location').value = '';

});