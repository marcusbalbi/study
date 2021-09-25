import { NextFunction, Request, Response } from "express";

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn === true) {
    next();
    return;
  }
  return res.status(403).send("Not Allowed!");
};

export { requireAuth };
