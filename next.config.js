const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
  },
};
