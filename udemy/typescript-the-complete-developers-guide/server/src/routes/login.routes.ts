import e, { NextFunction, Request, Response, Router } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn === true) {
    next();
    return;
  }
  return res.status(403).send("Not Allowed!");
};

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

router.get("/logout", (req: RequestWithBody, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get(
  "/protected",
  [requireAuth],
  (req: RequestWithBody, res: Response) => {
    res.send(`
    <h1>Welcome!!</h1>
  `);
  }
);

export { router };
