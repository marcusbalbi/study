import express from 'express';
import { bodyParser } from '../middlewares/body-parser';
import { cors } from '../middlewares/cors';
import { contentType } from '../middlewares/content-type';
import setupRoutes from './routes';

const app = express();

// middlewares
app.use(bodyParser);
app.use(cors);
app.use(contentType);

setupRoutes(app);

export default app;
