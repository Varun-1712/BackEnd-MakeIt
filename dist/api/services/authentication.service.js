"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var jwt = _interopRequireWildcard(require("jsonwebtoken"));
var bcrypt = _interopRequireWildcard(require("bcrypt"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class AuthenticationService {
  /**
   * Generate the JWT Token for the user
   * @param {String} id - ID of the user
   */
  async encryptPassword(password) {
    return await bcrypt.genSalt(10).then(salt => bcrypt.hash(password, salt)).then(hash => hash);
  }
  async comparePassword(password, hashedpassword) {
    return await bcrypt.compare(password, hashedpassword).then(result => result).catch(err => err);
  }
  async verifyToken(token) {
    return await jwt.verify(token, process.env.JWT_SECRET);
  }
  generateToken(id) {
    return jwt.sign({
      id
    }, process.env.JWT_SECRET);
  }
}
var _default = new AuthenticationService();
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvblNlcnZpY2UiLCJlbmNyeXB0UGFzc3dvcmQiLCJwYXNzd29yZCIsImJjcnlwdCIsImdlblNhbHQiLCJ0aGVuIiwic2FsdCIsImhhc2giLCJjb21wYXJlUGFzc3dvcmQiLCJoYXNoZWRwYXNzd29yZCIsImNvbXBhcmUiLCJyZXN1bHQiLCJjYXRjaCIsImVyciIsInZlcmlmeVRva2VuIiwidG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImdlbmVyYXRlVG9rZW4iLCJpZCIsInNpZ24iXSwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvYXBpL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5jbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICAvKipcbiAgICogR2VuZXJhdGUgdGhlIEpXVCBUb2tlbiBmb3IgdGhlIHVzZXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gSUQgb2YgdGhlIHVzZXJcbiAgICovXG4gIGFzeW5jIGVuY3J5cHRQYXNzd29yZChwYXNzd29yZCkge1xuICAgIHJldHVybiBhd2FpdCBiY3J5cHRcbiAgICAgIC5nZW5TYWx0KDEwKVxuICAgICAgLnRoZW4oKHNhbHQpID0+IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0KSlcbiAgICAgIC50aGVuKChoYXNoKSA9PiBoYXNoKTtcbiAgfVxuICBhc3luYyBjb21wYXJlUGFzc3dvcmQocGFzc3dvcmQsIGhhc2hlZHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIGF3YWl0IGJjcnlwdFxuICAgICAgLmNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGVycik7XG4gIH1cbiAgYXN5bmMgdmVyaWZ5VG9rZW4odG9rZW4pIHtcbiAgICByZXR1cm4gYXdhaXQgand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XG4gIH1cbiAgZ2VuZXJhdGVUb2tlbihpZCkge1xuICAgIHJldHVybiBqd3Quc2lnbihcbiAgICAgIHtcbiAgICAgICAgaWQsXG4gICAgICB9LFxuICAgICAgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhlbnRpY2F0aW9uU2VydmljZSgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQWlDO0FBQUE7QUFDakMsTUFBTUEscUJBQXFCLENBQUM7RUFDMUI7QUFDRjtBQUNBO0FBQ0E7RUFDRSxNQUFNQyxlQUFlLENBQUNDLFFBQVEsRUFBRTtJQUM5QixPQUFPLE1BQU1DLE1BQU0sQ0FDaEJDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FDWEMsSUFBSSxDQUFFQyxJQUFJLElBQUtILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDTCxRQUFRLEVBQUVJLElBQUksQ0FBQyxDQUFDLENBQzNDRCxJQUFJLENBQUVFLElBQUksSUFBS0EsSUFBSSxDQUFDO0VBQ3pCO0VBQ0EsTUFBTUMsZUFBZSxDQUFDTixRQUFRLEVBQUVPLGNBQWMsRUFBRTtJQUM5QyxPQUFPLE1BQU1OLE1BQU0sQ0FDaEJPLE9BQU8sQ0FBQ1IsUUFBUSxFQUFFTyxjQUFjLENBQUMsQ0FDakNKLElBQUksQ0FBRU0sTUFBTSxJQUFLQSxNQUFNLENBQUMsQ0FDeEJDLEtBQUssQ0FBRUMsR0FBRyxJQUFLQSxHQUFHLENBQUM7RUFDeEI7RUFDQSxNQUFNQyxXQUFXLENBQUNDLEtBQUssRUFBRTtJQUN2QixPQUFPLE1BQU1DLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDRixLQUFLLEVBQUVHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFDeEQ7RUFDQUMsYUFBYSxDQUFDQyxFQUFFLEVBQUU7SUFDaEIsT0FBT04sR0FBRyxDQUFDTyxJQUFJLENBQ2I7TUFDRUQ7SUFDRixDQUFDLEVBQ0RKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQ3ZCO0VBQ0g7QUFDRjtBQUFDLGVBRWMsSUFBSXBCLHFCQUFxQixFQUFFO0FBQUEifQ==