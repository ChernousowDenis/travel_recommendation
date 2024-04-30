// Fetch data from the JSON file

fetch('travel_recommendation_api.json')
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON data
        return response.json();
    })
    .then(data => {
        // Log the fetched data to the console
        console.log(data);
        // Here you can add logic to display the recommendations on your webpage
    })
    .catch(error => {
        // Log any errors to the console
        console.error('There was a problem fetching the data:', error);
    });

