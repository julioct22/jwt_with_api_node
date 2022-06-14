/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken')
const { config } = require('./config/config');
const secret = config.apiKey
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1NTEzNDQ1NX0.NLZB_qMj3SUOCLndolAZwT3UzfJLTKFF2JKBX31kpto';


function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload=verifyToken(token,secret);
console.log(payload);


