const {authJwt, verifyToken} = require("./authJwt");
const verifySignUp = require("./verifySignUp");

module.exports = {
  authJwt,
  verifyToken,
  verifySignUp
};
