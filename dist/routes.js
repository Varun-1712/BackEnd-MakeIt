"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;
var _router = _interopRequireDefault(require("./api/controllers/auth/router"));
var _router2 = _interopRequireDefault(require("./api/controllers/user/router"));
var _router3 = _interopRequireDefault(require("./api/controllers/product/router"));
var _router4 = _interopRequireDefault(require("./api/controllers/order/router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function routes(app) {
  app.use("/api/v1/auth", _router.default);
  app.use("/api/v1/user", _router2.default);
  app.use("/api/v1/product", _router3.default);
  app.use("/api/v1/order", _router4.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyb3V0ZXMiLCJhcHAiLCJ1c2UiLCJhdXRoUm91dGVyIiwidXNlclJvdXRlciIsInByb2R1Y3RSb3V0ZXIiLCJvcmRlclJvdXRlciJdLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9yb3V0ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGhSb3V0ZXIgZnJvbSBcIi4vYXBpL2NvbnRyb2xsZXJzL2F1dGgvcm91dGVyXCI7XG5pbXBvcnQgdXNlclJvdXRlciBmcm9tIFwiLi9hcGkvY29udHJvbGxlcnMvdXNlci9yb3V0ZXJcIjtcbmltcG9ydCBwcm9kdWN0Um91dGVyIGZyb20gXCIuL2FwaS9jb250cm9sbGVycy9wcm9kdWN0L3JvdXRlclwiO1xuaW1wb3J0IG9yZGVyUm91dGVyIGZyb20gXCIuL2FwaS9jb250cm9sbGVycy9vcmRlci9yb3V0ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlcyhhcHApIHtcbiAgYXBwLnVzZShcIi9hcGkvdjEvYXV0aFwiLCBhdXRoUm91dGVyKTtcbiAgYXBwLnVzZShcIi9hcGkvdjEvdXNlclwiLCB1c2VyUm91dGVyKTtcbiAgYXBwLnVzZShcIi9hcGkvdjEvcHJvZHVjdFwiLCBwcm9kdWN0Um91dGVyKTtcbiAgYXBwLnVzZShcIi9hcGkvdjEvb3JkZXJcIiwgb3JkZXJSb3V0ZXIpO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUF5RDtBQUMxQyxTQUFTQSxNQUFNLENBQUNDLEdBQUcsRUFBRTtFQUNsQ0EsR0FBRyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFQyxlQUFVLENBQUM7RUFDbkNGLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsRUFBRUUsZ0JBQVUsQ0FBQztFQUNuQ0gsR0FBRyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVHLGdCQUFhLENBQUM7RUFDekNKLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRUksZ0JBQVcsQ0FBQztBQUN2QyJ9