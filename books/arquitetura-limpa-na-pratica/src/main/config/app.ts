import express from 'express';
import { bodyParser } from './middlewares/body-parser';
import { cors } from './middlewares/cors';

const app = express();

app.use(bodyParser);
app.use(cors);

export default app;
