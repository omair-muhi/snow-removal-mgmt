// // Wait for the DOM to completely load before we run our JS
// document.addEventListener('DOMContentLoaded', (e) => {

//   const crewContainer = document.querySelector('.crew-container');

//   let crew;

//   // Function to grab crews from the database
//   const getCrews = () => {

//     fetch(`/api/crews`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Success in getting crews:', data);
//         crews = data;

//         if (!crews.length) {
//           displayEmpty();
//         } else {
//           initializeRows();
//         }
//       })
//       .catch((error) => console.error('Error:', error));
//   };

//   // Getting initial list of crews
//   getCrews();

//   // Function to help construct the crew HTML content inside crewContainer
//   const initializeRows = () => {
//     crewContainer.innerHTML = '';
//     const crewsToAdd = [];

//     crewsToAdd.forEach((crew) => crewsToAdd.push(createNewRow(crew)));
//     crewsToAdd.forEach((crew) => crewsToAdd.appendChild(crew));
//   };

//   const createNewRow = (crew) => {
//     // Crewcard div
//     const newCrewCard = document.createElement('div');
//     newCrewCard.classList.add('card');

//     // Heading
//     const newCrewCardHeading = document.createElement('div');
//     newCrewCard.classList.add('card-header');

//     // New crew info
//     const newCrewTitle = document.createElement('h2');
//     const newCrewDate = document.createElement('small');

//     // New crew card body
//     const newCrewCardBody = document.createElement('div');
//     newCrewCardBody.classList.add('card-body');

//     // New CrewS
//     const newCrewBody = document.createElement('p');
//     newCrewBody.textContent = crew.body;

//     const formattedDate = new Date(crew.createdAt).toLocaleDateString();
//     newCrewDate.textContent = ` (${formattedDate})`;

//     newCrewTitle.appendChild(newCrewDate);
//     newCrewCardHeading.appendChild(newCrewTitle);
//     newCrewCardBody.appendChild(newCrewBody);
//     newCrewCard.appendChild(newCrewCardHeading);
//     newCrewCard.appendChild(newCrewCardBody);
//     newCrewCard.setAttribute('data-crew', JSON.stringify(crew));

//     return newCrewCard;
//   };

//   const displayEmpty = () => {
//     crewContainer.innerHTML = '';
//     const messageH2 = document.createElement('h4');
//     messageH2.style.textAlign = 'center';
//     messageH2.style.marginTop = '50px';
//     messageH2.innerHTML = `No crews have yet been assigned` ;
//     crewContainer.appendChild(messageH2);
//   };

// });
