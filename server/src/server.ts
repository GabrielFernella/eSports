import express from 'express';
import { response } from 'express';

const app = express();

app.get('/games', (request, response) => {
  return response.json([{ id: 1, name: 'teste2' }]);
});

app.post('/ads', (request, response) => {
  return response.json([{ id: 1, name: 'teste2' }]);
});

app.get('/game/:id/ads', (request, response) => {
  return response.json([{ id: 1, name: 'teste2' }]);
});

app.get('/ads/:id/discord', (request, response) => {
  return response.json([{ id: 1, name: 'teste2' }]);
});

app.listen(3333);
