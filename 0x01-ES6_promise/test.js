// test.js

const { uploadPhoto, createUser } = require('./utils');

const photoResponse = uploadPhoto();
const userResponse = createUser();

console.log(`Status: ${photoResponse.status}`);
console.log(`Body: ${photoResponse.body}`);
console.log(`First Name: ${userResponse.firstName}`);
console.log(`Last Name: ${userResponse.lastName}`);
