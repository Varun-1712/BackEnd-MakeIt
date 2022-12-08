"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pino = _interopRequireDefault(require("pino"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const l = (0, _pino.default)({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});
var _default = l;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsIiwicGlubyIsIm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiQVBQX0lEIiwibGV2ZWwiLCJMT0dfTEVWRUwiXSwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvY29tbW9uL2xvZ2dlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGlubyBmcm9tICdwaW5vJztcblxuY29uc3QgbCA9IHBpbm8oe1xuICBuYW1lOiBwcm9jZXNzLmVudi5BUFBfSUQsXG4gIGxldmVsOiBwcm9jZXNzLmVudi5MT0dfTEVWRUwsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBd0I7QUFFeEIsTUFBTUEsQ0FBQyxHQUFHLElBQUFDLGFBQUksRUFBQztFQUNiQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNO0VBQ3hCQyxLQUFLLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRztBQUNyQixDQUFDLENBQUM7QUFBQyxlQUVZUCxDQUFDO0FBQUEifQ==