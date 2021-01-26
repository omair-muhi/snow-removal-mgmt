// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');

    const nameInput = document.getElementById('user');
    const jobsList = document.querySelector('tbody');


    const employeeName = localStorage.getItem('name');
    nameInput.innerHTML = employeeName;
    

    // Grab all the jobs
    const getJobs = () => {
        fetch('/api/jobs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const rowsToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    rowsToAdd.push(createJobsRow(data[i]));
                }
                renderJobsList(rowsToAdd);
                nameInput.value = '';
            })
            .catch((error) => console.error('Error:', error));
    };

    // Create list row for jobs
    const createJobsRow = (jobData) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-author', JSON.stringify(jobData));

        // Set each job's ID on the element itself
        tr.id = jobData.id;

        const td = document.createElement('td');
        td.textContent = jobData.client_name;
        tr.appendChild(td);

        // Return the table row
        return tr;
    };

    // Helper function to render content when there are no authors
    const renderEmpty = () => {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger');
        alertDiv.textContent = 'No Jobs Exist Contact Management';
        alertDiv.id = 'removeMe';
        alertDiv.style.marginRight = '5px';
        return alertDiv;
    };

    const renderJobsList = (rows) => {
        jobsList.innerHTML = '';

        if (rows.length) {
            if (document.getElementById('removeMe')) {
                document.getElementById('removeMe').remove();
            }
            rows.forEach((row) => jobsList.append(row));
        } else {
            document.querySelector('.job-container').appendChild(renderEmpty());
        }
    };
    // // Get the list of authors
    getJobs ();

    // // Handle when the author form is submitted
    // const handleAuthorFormSubmit = (e) => {
    //   e.preventDefault();

    //   if (!nameInput.value.trim()) {
    //     alert('Please provide an author name');
    //     return;
    //   }

    //   insertAuthor({
    //     name: nameInput.value.trim(),
    //   });
    // };

    // document
    //   .getElementById('author-form')
    //   .addEventListener('submit', handleAuthorFormSubmit);

    // // Event handler for the delete author button
    // const handleDeleteButtonPress = (e) => {
    //   const { id } = e.target.parentElement.parentElement;
    //   fetch(`/api/authors/${id}`, {
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }).then(getAuthors);
    // };




});
