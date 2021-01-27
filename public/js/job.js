document.addEventListener('DOMContentLoaded', () => {

    
    const activeJobs = document.getElementById('tbody');
    const clientName = document.getElementById('client_name');
    const location = document.getElementById('location');

    // Grab all the jobs
    const getJobs = () => {
        $.get('/api/jobs', {

        })
            .then((data) => {
                console.log(data);
                location.textContent = data[0].client_name;
            })
            // renderJobsList(rowsToAdd);
            // nameInput.value = '';
        
    .catch((error) => console.error('Error:', error));
};
getJobs();
});