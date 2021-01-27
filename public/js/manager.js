document.addEventListener('DOMContentLoaded', () => {

    const nameInput = document.getElementById('user');
    const jobsList = document.getElementById('jobsList');

    // Grab all the jobs
    const getJobs = () => {
        $.get('/api/jobs', {

        })
            .then((data) => {
                console.log(data);
                const rowsToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    rowsToAdd.push(createJobsRow(data[i]));
                }
                renderJobsList(rowsToAdd);
                nameInput.value = '';
            })
            .catch((err) => console.err('Error:', err));
    };

    // Create list row for jobs
    const createJobsRow = (jobData) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-job', JSON.stringify(jobData));

        // Set each job's ID on the element itself
        tr.id = jobData.id;
        tr.className = "tableRow";
    
        // Add Job Info
        const jobInfo = document.createElement('div');
        jobInfo.innerHTML = `
        <div class = "jobInfo">
        <td> ${jobData.client_name}</button>
        <td> ${jobData.location}</button>
        </div>
        `;
        
        // "Mark Job Complete or Asign to Crew

        const jobButtons = document.createElement('div');
        jobButtons.innerHTML = `
        <div class = "jobButtons">
        <button class='asignJob'> Asign Job</button>
        <button class='completeJob'> Complete</button>
        </div>
        `;
        
        tr.appendChild(jobButtons);
        tr.appendChild(jobInfo);
        

        // Return the table row
        return tr;
    };

    // Helper function to render content when there are no authors
    const renderEmpty = () => {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger');
        alertDiv.textContent = 'No Jobs Exist Contact Management';
        alertDiv.style.marginRight = '5px';
        return alertDiv;
    };

    const renderJobsList = (rows) => {

        if (rows.length) {
            if (document.getElementById('removeMe')) {
                document.getElementById('removeMe').remove();
            }
            rows.forEach((row) => jobsList.append(row));
        } else {
            document.querySelector('.job-container').appendChild(renderEmpty());
        }
    };
    // Get the list of jobs
    getJobs();

});
