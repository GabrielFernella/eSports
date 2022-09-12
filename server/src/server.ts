import express from 'express';
import { response } from 'express';

const app = express();

app.get('ads', (request, response) => {
  return response.json([{ id: 1, name: 'teste2' }]);
});

app.listen(3333);
