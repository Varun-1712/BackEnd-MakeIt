"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("../../models/User"));
var _authentication = _interopRequireDefault(require("./authentication.service"));
var _Seller = _interopRequireDefault(require("../../models/Seller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class AuthService {
  async getUserbyEmail(email) {
    let user = await _User.default.findOne({
      email: email
    });
    if (user) {
      return user;
    }
  }
  async getUser(uid) {
    let user = await _User.default.findById(uid);
    user.password = undefined;
    if (user.role == "seller") {
      const seller = await _Seller.default.findOne({
        user_id: uid
      });
      return {
        ...user["_doc"],
        ...seller["_doc"]
      };
    } else {
      return user;
    }
  }
  async createUser(user) {
    const newUser = {
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      password: await _authentication.default.encryptPassword(user.password),
      role: "user"
    };
    return await _User.default.create(newUser);
  }
  async createSeller(uid, body) {
    const seller = {
      user_id: uid,
      shop_name: body.shop_name,
      gst_id: body.gst_id,
      pickup_address: body.pickup_address
    };
    await _Seller.default.create(seller);
    const user = await _User.default.findById(uid);
    user.role = "seller";
    await user.save();
    return;
  }
  async addAddress(uid, address) {
    const user = await _User.default.findById(uid);
    user.address.push(address);
    await user.save();
    console.log(user);
    return;
  }
}
var _default = new AuthService();
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBdXRoU2VydmljZSIsImdldFVzZXJieUVtYWlsIiwiZW1haWwiLCJ1c2VyIiwiVXNlciIsImZpbmRPbmUiLCJnZXRVc2VyIiwidWlkIiwiZmluZEJ5SWQiLCJwYXNzd29yZCIsInVuZGVmaW5lZCIsInJvbGUiLCJzZWxsZXIiLCJTZWxsZXIiLCJ1c2VyX2lkIiwiY3JlYXRlVXNlciIsIm5ld1VzZXIiLCJuYW1lIiwibW9iaWxlIiwiYXV0aGVudGljYXRpb25TZXJ2aWNlIiwiZW5jcnlwdFBhc3N3b3JkIiwiY3JlYXRlIiwiY3JlYXRlU2VsbGVyIiwiYm9keSIsInNob3BfbmFtZSIsImdzdF9pZCIsInBpY2t1cF9hZGRyZXNzIiwic2F2ZSIsImFkZEFkZHJlc3MiLCJhZGRyZXNzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvYXBpL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vbW9kZWxzL1VzZXJcIjtcbmltcG9ydCBhdXRoZW50aWNhdGlvblNlcnZpY2UgZnJvbSBcIi4vYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IFNlbGxlciBmcm9tIFwiLi4vLi4vbW9kZWxzL1NlbGxlclwiO1xuY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBhc3luYyBnZXRVc2VyYnlFbWFpbChlbWFpbCkge1xuICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IGVtYWlsIH0pO1xuICAgIGlmICh1c2VyKSB7XG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZ2V0VXNlcih1aWQpIHtcbiAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQodWlkKTtcbiAgICB1c2VyLnBhc3N3b3JkID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHVzZXIucm9sZSA9PSBcInNlbGxlclwiKSB7XG4gICAgICBjb25zdCBzZWxsZXIgPSBhd2FpdCBTZWxsZXIuZmluZE9uZSh7IHVzZXJfaWQ6IHVpZCB9KTtcbiAgICAgIHJldHVybiB7IC4uLnVzZXJbXCJfZG9jXCJdLCAuLi5zZWxsZXJbXCJfZG9jXCJdIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cbiAgfVxuICBhc3luYyBjcmVhdGVVc2VyKHVzZXIpIHtcbiAgICBjb25zdCBuZXdVc2VyID0ge1xuICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgbW9iaWxlOiB1c2VyLm1vYmlsZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS5lbmNyeXB0UGFzc3dvcmQodXNlci5wYXNzd29yZCksXG4gICAgICByb2xlOiBcInVzZXJcIixcbiAgICB9O1xuICAgIHJldHVybiBhd2FpdCBVc2VyLmNyZWF0ZShuZXdVc2VyKTtcbiAgfVxuICBhc3luYyBjcmVhdGVTZWxsZXIodWlkLCBib2R5KSB7XG4gICAgY29uc3Qgc2VsbGVyID0ge1xuICAgICAgdXNlcl9pZDogdWlkLFxuICAgICAgc2hvcF9uYW1lOiBib2R5LnNob3BfbmFtZSxcbiAgICAgIGdzdF9pZDogYm9keS5nc3RfaWQsXG4gICAgICBwaWNrdXBfYWRkcmVzczogYm9keS5waWNrdXBfYWRkcmVzcyxcbiAgICB9O1xuICAgIGF3YWl0IFNlbGxlci5jcmVhdGUoc2VsbGVyKTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZCh1aWQpO1xuICAgIHVzZXIucm9sZSA9IFwic2VsbGVyXCI7XG4gICAgYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFzeW5jIGFkZEFkZHJlc3ModWlkLCBhZGRyZXNzKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQodWlkKTtcbiAgICB1c2VyLmFkZHJlc3MucHVzaChhZGRyZXNzKTtcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICByZXR1cm47XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBBdXRoU2VydmljZSgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBeUM7QUFDekMsTUFBTUEsV0FBVyxDQUFDO0VBQ2hCLE1BQU1DLGNBQWMsQ0FBQ0MsS0FBSyxFQUFFO0lBQzFCLElBQUlDLElBQUksR0FBRyxNQUFNQyxhQUFJLENBQUNDLE9BQU8sQ0FBQztNQUFFSCxLQUFLLEVBQUVBO0lBQU0sQ0FBQyxDQUFDO0lBQy9DLElBQUlDLElBQUksRUFBRTtNQUNSLE9BQU9BLElBQUk7SUFDYjtFQUNGO0VBQ0EsTUFBTUcsT0FBTyxDQUFDQyxHQUFHLEVBQUU7SUFDakIsSUFBSUosSUFBSSxHQUFHLE1BQU1DLGFBQUksQ0FBQ0ksUUFBUSxDQUFDRCxHQUFHLENBQUM7SUFDbkNKLElBQUksQ0FBQ00sUUFBUSxHQUFHQyxTQUFTO0lBRXpCLElBQUlQLElBQUksQ0FBQ1EsSUFBSSxJQUFJLFFBQVEsRUFBRTtNQUN6QixNQUFNQyxNQUFNLEdBQUcsTUFBTUMsZUFBTSxDQUFDUixPQUFPLENBQUM7UUFBRVMsT0FBTyxFQUFFUDtNQUFJLENBQUMsQ0FBQztNQUNyRCxPQUFPO1FBQUUsR0FBR0osSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUFFLEdBQUdTLE1BQU0sQ0FBQyxNQUFNO01BQUUsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTCxPQUFPVCxJQUFJO0lBQ2I7RUFDRjtFQUNBLE1BQU1ZLFVBQVUsQ0FBQ1osSUFBSSxFQUFFO0lBQ3JCLE1BQU1hLE9BQU8sR0FBRztNQUNkQyxJQUFJLEVBQUVkLElBQUksQ0FBQ2MsSUFBSTtNQUNmQyxNQUFNLEVBQUVmLElBQUksQ0FBQ2UsTUFBTTtNQUNuQmhCLEtBQUssRUFBRUMsSUFBSSxDQUFDRCxLQUFLO01BQ2pCTyxRQUFRLEVBQUUsTUFBTVUsdUJBQXFCLENBQUNDLGVBQWUsQ0FBQ2pCLElBQUksQ0FBQ00sUUFBUSxDQUFDO01BQ3BFRSxJQUFJLEVBQUU7SUFDUixDQUFDO0lBQ0QsT0FBTyxNQUFNUCxhQUFJLENBQUNpQixNQUFNLENBQUNMLE9BQU8sQ0FBQztFQUNuQztFQUNBLE1BQU1NLFlBQVksQ0FBQ2YsR0FBRyxFQUFFZ0IsSUFBSSxFQUFFO0lBQzVCLE1BQU1YLE1BQU0sR0FBRztNQUNiRSxPQUFPLEVBQUVQLEdBQUc7TUFDWmlCLFNBQVMsRUFBRUQsSUFBSSxDQUFDQyxTQUFTO01BQ3pCQyxNQUFNLEVBQUVGLElBQUksQ0FBQ0UsTUFBTTtNQUNuQkMsY0FBYyxFQUFFSCxJQUFJLENBQUNHO0lBQ3ZCLENBQUM7SUFDRCxNQUFNYixlQUFNLENBQUNRLE1BQU0sQ0FBQ1QsTUFBTSxDQUFDO0lBQzNCLE1BQU1ULElBQUksR0FBRyxNQUFNQyxhQUFJLENBQUNJLFFBQVEsQ0FBQ0QsR0FBRyxDQUFDO0lBQ3JDSixJQUFJLENBQUNRLElBQUksR0FBRyxRQUFRO0lBQ3BCLE1BQU1SLElBQUksQ0FBQ3dCLElBQUksRUFBRTtJQUNqQjtFQUNGO0VBQ0EsTUFBTUMsVUFBVSxDQUFDckIsR0FBRyxFQUFFc0IsT0FBTyxFQUFFO0lBQzdCLE1BQU0xQixJQUFJLEdBQUcsTUFBTUMsYUFBSSxDQUFDSSxRQUFRLENBQUNELEdBQUcsQ0FBQztJQUNyQ0osSUFBSSxDQUFDMEIsT0FBTyxDQUFDQyxJQUFJLENBQUNELE9BQU8sQ0FBQztJQUMxQixNQUFNMUIsSUFBSSxDQUFDd0IsSUFBSSxFQUFFO0lBQ2pCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQzdCLElBQUksQ0FBQztJQUNqQjtFQUNGO0FBQ0Y7QUFBQyxlQUNjLElBQUlILFdBQVcsRUFBRTtBQUFBIn0=