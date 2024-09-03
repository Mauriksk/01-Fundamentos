const axios = require("axios");

const httpClientPlugin = {
  get: async (url) => {
    const { data } = await axios.get(url);
    // const res = await fetch(url);
    // const data = await res.json();
    return data;
  },
};

module.exports = {
  httpClientPlugin,
};
