document.addEventListener('DOMContentLoaded', () => {

    // Employee Container


    const employeesList = document.getElementById('employeesList');

    // Grab all the jobs
    const getEmployee = () => {
        $.get('/api/employees', {

        })
            .then((data) => {
                console.log(data);
                const eRowsToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    eRowsToAdd.push(createEmployeesRow(data[i]));
                }
                renderEmployeesList(eRowsToAdd);
            })
            .catch((err) => console.log('Error:', err));
    };

    // Create list row for employees
    const createEmployeesRow = (employeeData) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-employee', JSON.stringify(employeeData));
        // Set each employee's ID on the element itself
        tr.id = employeeData.id;
        tr.className = "tableRowE";

        // Add employee Info
        const employeeInfo = document.createElement('div');
        employeeInfo.className = 'employeeInfo';
        employeeInfo.innerHTML = `
        <td> ${employeeData.Name}</td>
        `;

        // "Mark employee Complete or Asign to Crew


        const employeeButtons = document.createElement('div');
        employeeButtons.className = 'employeeButtons';
        employeeButtons.innerHTML = `
        <button class='employeeButtons'> Asign Employee</button>
        `;

        tr.appendChild(employeeInfo);
        tr.appendChild(employeeButtons);


        // Return the table row
        return tr;
    };

    // Helper function to render content when there are no authors
    const renderEmptyE = () => {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger');
        alertDiv.textContent = 'No Jobs Exist Contact Management';
        alertDiv.style.marginRight = '5px';
        return alertDiv;
    };

    const renderEmployeesList = (rows) => {

        if (rows.length) {
            if (document.getElementById('removeMe')) {
                document.getElementById('removeMe').remove();
            }
            rows.forEach((row) => employeesList.append(row));
        } else {
            document.querySelector('.employee-container').appendChild(renderEmpty());
        }
    };
    // Get the list of jobs
    getEmployee();



    // Crew Container

    const crewsList = document.getElementById('crewsList');

    // Grab all the crews
    const getCrews = () => {
        $.get('/api/crews', {

        })
            .then((data) => {
                console.log(data);
                const cRowsToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    cRowsToAdd.push(createCrewsRow(data[i]));
                }
                renderCrewsList(cRowsToAdd);
            })
            .catch((err) => console.log('Error:', err));
    };
    // $.get(`/api/crewEmployees/:${data[i].employee_id}`, {

    // })
    //     .then((data) => {
    //         cRowsToAdd.push(createCrewsRow(data[i]));
    //     })
    //     .catch((err) => console.log('Error:', err));
    // Create list row for crews
    const createCrewsRow = (crewData) => {

        const tr = document.createElement('tr');
        tr.setAttribute('data-crew', JSON.stringify(crewData));
        // Set each crew's ID on the element itself
        tr.id = crewData.id;
        tr.className = "tableRowC";
        console.log(crewData);
        // Add crew Info
        const crewInfo = document.createElement('div');
        crewInfo.className = 'crewInfo';

        $.get(`/api/crewEmployees${crewData.employee_id}`, {

        })
            .then((data) => {
                console.log(data.Name);
                // const employeeName = document.createElement('p');
                employeeName.textContent = data
                tr.appendChild(employeeName);

            })
            .catch((error) => console.error('Error:', error));
    
    // Create list row for crews
    // .then(() => {
    //     let url = `/api/crewJobs/:${data[i].crewData.job_id}`;
    //     $.get(url, {
    //     })
    //         .then((data) => {
    //             const crewJob = document.createElement('div');
    //             crewInfo.innerHTML = `
    //             <p> ${crewData.jobe_id}</p>`
    //         })
    // })
    // .catch ((err) => console.log('Error:', err));

    //     let url = `/api/crewJobs/:${data[i].crewData.job_id}`;
    //     $.get(url, {
    //     })
    //         .then((data) => {
    //             crewInfo.innerHTML = `
    //     <p> ${crewData.jobe_id}</p>`
    //         })
    //         .catch((err) => console.log('Error:', err));
    //     crewInfo.innerHTML = `
    // <p> ${crewData.employee_id}</p>
    // <p> "To Be Determined" </p>
    // <p> ${crewData.job_id}</p>
    // `;





    // Return the table row
    return tr;
};

// Helper function to render content when there are no authors
const renderEmptyC = () => {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-danger');
    alertDiv.textContent = 'No Crews Exist Contact Management';
    alertDiv.style.marginRight = '5px';
    return alertDiv;
};

const renderCrewsList = (rows) => {

    if (rows.length) {
        if (document.getElementById('removeMe')) {
            document.getElementById('removeMe').remove();
        }
        rows.forEach((row) => crewsList.append(row));
    } else {
        document.querySelector('.crews-container').appendChild(renderEmpty());
    }
};
// Get the list of jobs
getCrews();





////////////////////////////////////////////////////////
// Jobs Container

const nameJInput = document.getElementById('user');
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
        <button class='asignJob'> Asign Job</td>
        <button class='completeJob'> Complete</td>
        </div>
        `;

    tr.appendChild(jobButtons);
    tr.appendChild(jobInfo);


    // Return the table row
    return tr;
};

// Helper function to render content when there are no authors
const renderEmptyJ = () => {
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
