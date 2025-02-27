// api-key-test.js
const awsConfig = {
  region: 'us-east-1',
  apiKey: 'AKIA1234567890ABCDEF', // Matches AKIA[0-9A-Z]{16}
};

function fetchData() {
  console.log('Using API key:', awsConfig.apiKey);
}


fetchData();
