"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var path = _interopRequireWildcard(require("path"));
var bodyParser = _interopRequireWildcard(require("body-parser"));
var http = _interopRequireWildcard(require("http"));
var os = _interopRequireWildcard(require("os"));
var _logger = _interopRequireDefault(require("./logger"));
var _swagger = _interopRequireDefault(require("./swagger"));
var _mongo = _interopRequireDefault(require("./mongo"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = new _express.default();
class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.use(bodyParser.json({
      limit: process.env.REQUEST_LIMIT || "100kb"
    }));
    app.use(bodyParser.urlencoded({
      extended: true,
      limit: process.env.REQUEST_LIMIT || "100kb"
    }));
    app.use(bodyParser.text({
      limit: process.env.REQUEST_LIMIT || "100kb"
    }));
    app.use(_express.default.static(`${root}/public`));
    app.use((0, _cors.default)());
  }
  router(routes) {
    this.routes = routes;
    return this;
  }
  listen(port = process.env.PORT) {
    const welcome = p => () => _logger.default.info(`up and running in ${process.env.NODE_ENV || "development"} @: ${os.hostname()} on port: ${p}}`);
    (0, _swagger.default)(app, this.routes).then(() => {
      _logger.default.info("Database Loaded!");
      http.createServer(app).listen(port, welcome(port));
    }).catch(e => {
      _logger.default.error(e);
    });
    return app;
  }
}
exports.default = ExpressServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhcHAiLCJFeHByZXNzIiwiRXhwcmVzc1NlcnZlciIsImNvbnN0cnVjdG9yIiwicm9vdCIsInBhdGgiLCJub3JtYWxpemUiLCJfX2Rpcm5hbWUiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsImxpbWl0IiwicHJvY2VzcyIsImVudiIsIlJFUVVFU1RfTElNSVQiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJ0ZXh0Iiwic3RhdGljIiwiY29ycyIsInJvdXRlciIsInJvdXRlcyIsImxpc3RlbiIsInBvcnQiLCJQT1JUIiwid2VsY29tZSIsInAiLCJsIiwiaW5mbyIsIk5PREVfRU5WIiwib3MiLCJob3N0bmFtZSIsIm9hcyIsInRoZW4iLCJodHRwIiwiY3JlYXRlU2VydmVyIiwiY2F0Y2giLCJlIiwiZXJyb3IiXSwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvY29tbW9uL3NlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0ICogYXMgb3MgZnJvbSBcIm9zXCI7XG5pbXBvcnQgbCBmcm9tIFwiLi9sb2dnZXJcIjtcbmltcG9ydCBvYXMgZnJvbSBcIi4vc3dhZ2dlclwiO1xuXG5pbXBvcnQgbW9uZ28gZnJvbSBcIi4vbW9uZ29cIjtcblxuY29uc3QgYXBwID0gbmV3IEV4cHJlc3MoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc1NlcnZlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJvb3QgPSBwYXRoLm5vcm1hbGl6ZShgJHtfX2Rpcm5hbWV9Ly4uLy4uYCk7XG5cbiAgICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbih7IGxpbWl0OiBwcm9jZXNzLmVudi5SRVFVRVNUX0xJTUlUIHx8IFwiMTAwa2JcIiB9KSk7XG4gICAgYXBwLnVzZShcbiAgICAgIGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgICAgIGV4dGVuZGVkOiB0cnVlLFxuICAgICAgICBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCB8fCBcIjEwMGtiXCIsXG4gICAgICB9KVxuICAgICk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLnRleHQoeyBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCB8fCBcIjEwMGtiXCIgfSkpO1xuXG4gICAgYXBwLnVzZShFeHByZXNzLnN0YXRpYyhgJHtyb290fS9wdWJsaWNgKSk7XG5cbiAgICBhcHAudXNlKGNvcnMoKSk7XG4gIH1cblxuICByb3V0ZXIocm91dGVzKSB7XG4gICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW4ocG9ydCA9IHByb2Nlc3MuZW52LlBPUlQpIHtcbiAgICBjb25zdCB3ZWxjb21lID0gKHApID0+ICgpID0+XG4gICAgICBsLmluZm8oXG4gICAgICAgIGB1cCBhbmQgcnVubmluZyBpbiAke1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIlxuICAgICAgICB9IEA6ICR7b3MuaG9zdG5hbWUoKX0gb24gcG9ydDogJHtwfX1gXG4gICAgICApO1xuXG4gICAgb2FzKGFwcCwgdGhpcy5yb3V0ZXMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGwuaW5mbyhcIkRhdGFiYXNlIExvYWRlZCFcIik7XG4gICAgICAgIGh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKHBvcnQsIHdlbGNvbWUocG9ydCkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBsLmVycm9yKGUpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXBwO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUE0QjtBQUFBO0FBQUE7QUFFNUIsTUFBTUEsR0FBRyxHQUFHLElBQUlDLGdCQUFPLEVBQUU7QUFFVixNQUFNQyxhQUFhLENBQUM7RUFDakNDLFdBQVcsR0FBRztJQUNaLE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUUsR0FBRUMsU0FBVSxRQUFPLENBQUM7SUFFakRQLEdBQUcsQ0FBQ1EsR0FBRyxDQUFDQyxVQUFVLENBQUNDLElBQUksQ0FBQztNQUFFQyxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLElBQUk7SUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6RWQsR0FBRyxDQUFDUSxHQUFHLENBQ0xDLFVBQVUsQ0FBQ00sVUFBVSxDQUFDO01BQ3BCQyxRQUFRLEVBQUUsSUFBSTtNQUNkTCxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLElBQUk7SUFDdEMsQ0FBQyxDQUFDLENBQ0g7SUFDRGQsR0FBRyxDQUFDUSxHQUFHLENBQUNDLFVBQVUsQ0FBQ1EsSUFBSSxDQUFDO01BQUVOLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGFBQWEsSUFBSTtJQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXpFZCxHQUFHLENBQUNRLEdBQUcsQ0FBQ1AsZ0JBQU8sQ0FBQ2lCLE1BQU0sQ0FBRSxHQUFFZCxJQUFLLFNBQVEsQ0FBQyxDQUFDO0lBRXpDSixHQUFHLENBQUNRLEdBQUcsQ0FBQyxJQUFBVyxhQUFJLEdBQUUsQ0FBQztFQUNqQjtFQUVBQyxNQUFNLENBQUNDLE1BQU0sRUFBRTtJQUNiLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLE9BQU8sSUFBSTtFQUNiO0VBRUFDLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1csSUFBSSxFQUFFO0lBQzlCLE1BQU1DLE9BQU8sR0FBSUMsQ0FBQyxJQUFLLE1BQ3JCQyxlQUFDLENBQUNDLElBQUksQ0FDSCxxQkFDQ2hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0IsUUFBUSxJQUFJLGFBQ3pCLE9BQU1DLEVBQUUsQ0FBQ0MsUUFBUSxFQUFHLGFBQVlMLENBQUUsR0FBRSxDQUN0QztJQUVILElBQUFNLGdCQUFHLEVBQUNoQyxHQUFHLEVBQUUsSUFBSSxDQUFDcUIsTUFBTSxDQUFDLENBQ2xCWSxJQUFJLENBQUMsTUFBTTtNQUNWTixlQUFDLENBQUNDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztNQUMxQk0sSUFBSSxDQUFDQyxZQUFZLENBQUNuQyxHQUFHLENBQUMsQ0FBQ3NCLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFRSxPQUFPLENBQUNGLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUNEYSxLQUFLLENBQUVDLENBQUMsSUFBSztNQUNaVixlQUFDLENBQUNXLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDO0lBRUosT0FBT3JDLEdBQUc7RUFDWjtBQUNGO0FBQUMifQ==