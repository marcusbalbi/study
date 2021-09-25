import express from "express";
import cookieSession from "cookie-session";
// import { router } from "./routes/login.routes";
import { router as controllerRouter } from "./controllers/decorators/controller";

import "./controllers/LoginController";

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use(cookieSession({ keys: ["teste"] }));

app.use(controllerRouter);

app.listen(3333, () => {
  console.clear();
  console.log("running on port 3333");
});
