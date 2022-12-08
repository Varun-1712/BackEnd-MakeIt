"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var express = _interopRequireWildcard(require("express"));
var _controller = _interopRequireDefault(require("./controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = express.Router().post("/login", _controller.default.login).get("/test", async (req, res) => {
  // return origin name and address
  res.send({
    host: req.get("host"),
    originalUrl: req.originalUrl,
    origin: req.get("origin"),
    orginProper: req.headers.origin
  });
}).post("/signup", _controller.default.signup);
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHByZXNzIiwiUm91dGVyIiwicG9zdCIsImNvbnRyb2xsZXIiLCJsb2dpbiIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJob3N0Iiwib3JpZ2luYWxVcmwiLCJvcmlnaW4iLCJvcmdpblByb3BlciIsImhlYWRlcnMiLCJzaWdudXAiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zZXJ2ZXIvYXBpL2NvbnRyb2xsZXJzL2F1dGgvcm91dGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZXhwcmVzc1xuICAuUm91dGVyKClcbiAgLnBvc3QoXCIvbG9naW5cIiwgY29udHJvbGxlci5sb2dpbilcbiAgLmdldChcIi90ZXN0XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIC8vIHJldHVybiBvcmlnaW4gbmFtZSBhbmQgYWRkcmVzc1xuICAgIHJlcy5zZW5kKHtcbiAgICAgIGhvc3Q6IHJlcS5nZXQoXCJob3N0XCIpLFxuICAgICAgb3JpZ2luYWxVcmw6IHJlcS5vcmlnaW5hbFVybCxcbiAgICAgIG9yaWdpbjogcmVxLmdldChcIm9yaWdpblwiKSxcbiAgICAgIG9yZ2luUHJvcGVyOiByZXEuaGVhZGVycy5vcmlnaW4sXG4gICAgfSk7XG4gIH0pXG4gIC5wb3N0KFwiL3NpZ251cFwiLCBjb250cm9sbGVyLnNpZ251cCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBc0M7QUFBQTtBQUFBO0FBQUEsZUFFdkJBLE9BQU8sQ0FDbkJDLE1BQU0sRUFBRSxDQUNSQyxJQUFJLENBQUMsUUFBUSxFQUFFQyxtQkFBVSxDQUFDQyxLQUFLLENBQUMsQ0FDaENDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEtBQUs7RUFDaEM7RUFDQUEsR0FBRyxDQUFDQyxJQUFJLENBQUM7SUFDUEMsSUFBSSxFQUFFSCxHQUFHLENBQUNELEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDckJLLFdBQVcsRUFBRUosR0FBRyxDQUFDSSxXQUFXO0lBQzVCQyxNQUFNLEVBQUVMLEdBQUcsQ0FBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN6Qk8sV0FBVyxFQUFFTixHQUFHLENBQUNPLE9BQU8sQ0FBQ0Y7RUFDM0IsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQ0RULElBQUksQ0FBQyxTQUFTLEVBQUVDLG1CQUFVLENBQUNXLE1BQU0sQ0FBQztBQUFBIn0=