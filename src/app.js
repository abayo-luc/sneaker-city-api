import express from 'express';
import cors from 'cors';
import api from './api';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.use('*', (_, res) =>
  res.json({
    message: 'API endpoint not found',
  })
);
export default app;
