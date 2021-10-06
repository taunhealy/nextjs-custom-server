require('dotenv').config();

module.exports = {
  images: {
    domains: ['localhost'],
  },
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
};
