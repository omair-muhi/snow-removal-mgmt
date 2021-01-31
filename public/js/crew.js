document.addEventListener('DOMContentLoaded', () => {

    
    const forwardGeo = (place) => {
    
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoibWlrZTIzMTQiLCJhIjoiY2toamIwdnl4MTFmNDMxbnEyNWJwbjR1NiJ9.1DUKlJTuskl62mOGAL0cwA`
    const coordinates = [];
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            let coordinates = response.features[0].geometry.coordinates;

            // ADD YOUR ACCESS TOKEN FROM
            mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZTIzMTQiLCJhIjoiY2toamIyam13MTYwZzJxb2JqaTV1Mml4ayJ9.6sKRxh4XoUor0TeyVVgvvQ';
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: [coordinates[0], coordinates[1]], // starting position [lng, lat]
                zoom: 9 // starting zoom
            });
            var marker = new mapboxgl.Marker()
                .setLngLat([coordinates[0], coordinates[1]])
                .addTo(map);
        })
    };
    
    const mapButton = document.querySelectorAll('.get-map');
    
    if (mapButton) {
        console.info("works");
        mapButton.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                
                fetch(`/api/jobs/${id}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }).then((response) => {
                    return response.json();
                })
                .then((response) => {
                    const jobLocation = response.location;
                    console.log(jobLocation);
                    forwardGeo(jobLocation);         
                 })
                
            });
        });
    };
});
