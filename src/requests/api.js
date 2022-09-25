const axios = require('axios')

const api = axios.create({
  baseURL: process.env.AUTH_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.AUTH_API_TOKEN}`,
  },
});

module.exports = api;
