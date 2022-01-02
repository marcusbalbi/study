/* eslint-disable node/no-path-concat */
import { Router, Express } from 'express';
import { readdirSync } from 'fs';

const setupRoutes = (app: Express): void => {
  const router = Router();

  app.use('/api', router);
  readdirSync(`${__dirname}/routes`).map(async (file) => {
    (await import(`${__dirname}/routes/${file}`)).default(router);
  });
};

export default setupRoutes;
