import express from "express"
import cors from "cors"
import productRouter from './Routers/product.Router.js';
const app = express();

app.use(
    cors({
      credentials: true,
      origin: ['http://localhost:3000'],
    })
  );

  app.use('/api/products', productRouter);

const PORT = 9000;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});