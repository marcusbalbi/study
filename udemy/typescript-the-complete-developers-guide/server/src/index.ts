import express from "express";
import cookieSession from "cookie-session";

import "./controllers/LoginController";
import { AppRouter } from "./AppRouter";

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use(cookieSession({ keys: ["teste"] }));

app.use(AppRouter.getInstance());

app.listen(3333, () => {
  console.clear();
  console.log("running on port 3333");
});
