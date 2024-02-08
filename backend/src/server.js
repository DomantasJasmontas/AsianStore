import dotenv from 'dotenv';
dotenv.config();

import express from "express"
import cors from "cors"
import productRouter from './Routers/product.Router.js';
import userRouter from './Routers/user.Router.js';

import { dbconnect } from './config/database.config.js';
dbconnect();

const app = express();
app.use(express.json());

app.use(
    cors({
      credentials: true,
      origin: ['http://localhost:3000'],
    })
  );

  app.use('/api/products', productRouter);
  app.use('/api/users', userRouter);

const PORT = 9000;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});