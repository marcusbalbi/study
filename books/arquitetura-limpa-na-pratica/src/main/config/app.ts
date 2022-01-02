import express from 'express';
import { bodyParser } from './middlewares/body-parser';
import { cors } from './middlewares/cors';
import { contentType } from './middlewares/content-type';

const app = express();

app.use(bodyParser);
app.use(cors);
app.use(contentType);

export default app;
