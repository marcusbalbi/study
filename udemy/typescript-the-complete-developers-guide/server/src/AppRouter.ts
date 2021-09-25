import { Router } from "express";

export class AppRouter {
  private static router: Router | null = null;

  private constructor() {}

  static getInstance(): Router {
    if (!AppRouter.router) {
      AppRouter.router = Router();
    }

    return AppRouter.router;
  }
}
