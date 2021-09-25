import express from "express";
import cookieSession from "cookie-session";
import { router as loginroutes } from "./routes/login.routes";

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use(cookieSession({ keys: ["teste"] }));

app.use(loginroutes);

app.listen(3333, () => {
  console.clear();
  console.log("running on port 3333");
});
