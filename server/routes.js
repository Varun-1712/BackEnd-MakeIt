import authRouter from "./api/controllers/auth/router";
import userRouter from "./api/controllers/user/router";
import productRouter from "./api/controllers/product/router";
import orderRouter from "./api/controllers/order/router";
export default function routes(app) {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1/order", orderRouter);
}
