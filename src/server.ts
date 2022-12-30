import express from 'express';
import { Request, Response } from 'express';
const door = 3001;

const app = express();


app.listen(3001, () => {
  console.log(`Application started on port ${door}!`);
});
