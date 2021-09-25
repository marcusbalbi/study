import e, { Request, Response, Router } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
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
});

router.post("/login", (req: RequestWithBody, res: Response) => {
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
});

router.get("/", (req: RequestWithBody, res: Response) => {
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
});

export { router };
