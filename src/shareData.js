const axios = require('axios');

async function fetchData() {
  try {
    // Call the first API to retrieve the page size
    const pageSizeResponse = await axios.get('https://api.example.com/page-size');
    const pageSize = pageSizeResponse.data.pageSize;

    // Prepare an array to store the parallel API requests
    const requests = [];

    // Make parallel API requests based on the page size
    for (let i = 0; i < pageSize; i++) {
      requests.push(axios.get(`https://api.example.com/data/${i + 1}`));
    }

    // Execute the parallel requests with a delay between each request
    const responses = [];
    for (let i = 0; i < requests.length; i++) {
      const response = await makeDelayedRequest(requests[i], i * 1000); // Adjust the delay as needed
      responses.push(response);
    }

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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      request.then(resolve).catch(reject);
    }, delay);
  });
}

fetchData();
