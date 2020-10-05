const axios = require("axios");
const BASE_PATH = process.env.API_BASE_URL
  ? process.env.API_BASE_URL
  : "http://localhost:5000/api/products";
export function get(url) {
  return axios.get(`${BASE_PATH}${url}`);
}

export function post(url, body = {}) {
  console.log(BASE_PATH, url);
  return axios({
    url: `${BASE_PATH}${url}`,
    method: "POST",
    data: body,
    headers: {
      "Content-Type": "application/json",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}
export function deleteCall(url, body = {}) {
  return axios({
    url: `${BASE_PATH}${url}`,
    method: "DELETE"
  });
}
