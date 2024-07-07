import express from "express";
import { create, deleteBlog, getAll, getOne, update } from "../controller/blogController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteBlog);


export default route;