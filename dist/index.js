"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./common/env");
var _server = _interopRequireDefault(require("./common/server"));
var _routes = _interopRequireDefault(require("./routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = new _server.default().router(_routes.default).listen(process.env.PORT);
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZXJ2ZXIiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJsaXN0ZW4iLCJwcm9jZXNzIiwiZW52IiwiUE9SVCJdLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2NvbW1vbi9lbnZcIjtcbmltcG9ydCBTZXJ2ZXIgZnJvbSBcIi4vY29tbW9uL3NlcnZlclwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZlcigpLnJvdXRlcihyb3V0ZXMpLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQThCO0FBQUEsZUFFZixJQUFJQSxlQUFNLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxlQUFNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO0FBQUEifQ==