import { Request, Response } from "express";
import { requireAuth } from "../middlewares/requireAuth";
import { get, controller, post } from "./decorators";
import { use } from "./decorators/use";

@controller("")
export class LoginController {
  @get("/")
  main(req: Request, res: Response): void {
    if (req.session?.loggedIn) {
      res.send(`
      <div>
        <div>You are LoggedIn</div>
        <a href="/logout">Logout!</a>
      </div>
    `);
    } else {
      res.send(`
      <div>
        <div>You are not LoggedIn</div>
        <a href="/login">Login!</a>
      </div>
    `);
    }
  }

  @get("/login")
  loginPage(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit!</button>
    </form>
  `);
  }

  @post("/login")
  login(req: Request, res: Response): void {
    const { email, password } = req.body;
    if (
      email &&
      password &&
      email === "balbimarcus@gmail.com" &&
      password === "abc123"
    ) {
      req.session = { loggedIn: true };
      // res.send(`${email.toUpperCase()}:${password}`);
      res.redirect("/");
    } else {
      res.status(422).send("Error: Invalid email or passord!");
    }
  }

  @get("/logout")
  logout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect("/");
  }

  @get("/protected")
  @use(requireAuth)
  protectedRoute(req: Request, res: Response): void {
    res.send(`
    <h1>Welcome!!</h1>
  `);
  }
}
