const axios = require('axios');

async function fetchData() {
  try {
    // Call the first API to retrieve the page size
    const pageSizeResponse = await axios.get('https://api.example.com/page-size');
    const pageSize = pageSizeResponse.data.pageSize;

    // Prepare an array to store the parallel API requests
    const requests = Array.from({ length: pageSize }, (_, i) =>
      axios.get(`https://api.example.com/data/${i + 1}`)
    );

    // Execute the parallel requests with a delay between each request
    const responses = await Promise.all(
      requests.map((request, i) => makeDelayedRequest(request, i * 1000)) // Adjust the delay as needed
    );

    // Combine the responses into a single array
    const combinedResult = responses.reduce((accumulator, response) => {
      return accumulator.concat(response.data);
    }, []);

    console.log('Combined Result:', combinedResult);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to delay a request using a timeout
function makeDelayedRequest(request, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(request);
    }, delay);
  });
}

fetchData();
