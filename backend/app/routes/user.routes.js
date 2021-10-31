const { authJwt, verifyToken } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/all", controller.allAccess);

  app.get(
    "/api/user",
    verifyToken,
    controller.userBoard
  );

  app.get(
    "/api/mod",
    [verifyToken, authJwt],
    controller.moderatorBoard
  );

  app.get(
    "/api/admin",
    [verifyToken, authJwt],
    controller.adminBoard
  );
};
