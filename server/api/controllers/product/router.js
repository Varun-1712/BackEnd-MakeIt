import controller from "./controller";
import * as express from "express";
export default express
  .Router()
  .post("/addproduct", controller.addProduct)
  .post("/addreview", controller.addReview)
  .get("/getreview", controller.getReview)
  .get("/getproductbyid", controller.getProductById)
  .get("/gettoppicks", controller.getTopPicks)
  .get("/getproductseller", controller.getProductSeller)
  .get("/atlassearch", controller.atlasSearch);
