const awsConfig = {
  region: 'us-east-1',
  apiKey: 'AKIA1234567890ABCDEF',
};

function fetchData() {
  console.log('Using API key:', awsConfig.apiKey);
  console.log('New commit added!'); // New line
}

fetchData();
