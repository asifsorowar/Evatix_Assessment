// const withImages = require("next-images");
// module.exports = withImages();
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb://localhost/evatix",
    JWT_KEY: "123456",
    JWT_EXPIRE: "20d",
  },
};
