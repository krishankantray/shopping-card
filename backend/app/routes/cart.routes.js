const { authJwt, verifyToken } = require("../middleware");
const controller = require("../controllers/cart.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/api/cart",[verifyToken, authJwt], controller.getCartItems);
    app.post("/api/cart",[verifyToken, authJwt], controller.addCartItems);
}