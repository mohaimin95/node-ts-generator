import express, { Express } from 'express';

const app: Express = express();

app.get('/health-check', (__, res) => res.send('OK'));

export default app;
