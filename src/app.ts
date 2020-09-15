import express from 'express';
import { json } from 'body-parser';

import { analyzerRouter } from './routes/analyze';

const app = express();

app.use(json());
app.use(analyzerRouter);

export { app };
