import express from "express";
import defaultRouter from "./routers/default.routes.js";
import router from "./routers/campusesRouter.js";

//configure Express.js app
const app = express();

//view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//static directories
app.use(express.static("public"));

// mount
app.use("/campuses", router);
app.use("/locations", router);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
// app.use("/", defaultRouter);

export default app;
