const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function getPostById(id) {
  const response = await axios.get(`${BASE_URL}/posts/${id}`);
  return response;
}

async function createPost(userId, title, body) {
  const response = await axios.post(`${BASE_URL}/posts`, {
    userId,
    title,
    body,
  });
  return response;
}

module.exports = { getPostById, createPost };
