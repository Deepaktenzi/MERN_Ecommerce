import express from 'express';
import data from './data.js';
//import dotenv from 'dotenv';

//dotenv.config({ path: 'config/config.env' });

const app = express();

const port = process.env.PORT || 4000;

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.listen(port, () => {
  console.log('SERVER IS RUNNING...');
});
