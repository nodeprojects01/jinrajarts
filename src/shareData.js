const axios = require('axios');

async function fetchData() {
  try {
    // Call the first API to retrieve the page size
    const pageSizeResponse = await axios.get('https://api.example.com/page-size');
    const pageSize = pageSizeResponse.data.pageSize;

    // Prepare an array of functions that return promises
    const requestFunctions = Array.from({ length: pageSize }, (_, i) =>
      () => makeDelayedRequest(`https://api.example.com/data/${i + 1}`, i * 1000) // Adjust the delay as needed
    );

    // Execute the promises with a delay between each request
    const responses = await Promise.all(requestFunctions.map(fn => fn()));

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
function makeDelayedRequest(url, delay) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      try {
        const response = await axios.get(url);
        resolve(response);
      } catch (error) {
        resolve({ error: error.message });
      }
    }, delay);
  });
}

fetchData();
