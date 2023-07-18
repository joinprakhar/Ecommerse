import express from 'express';
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js';
connectDB();
import products from './Data/products.js';





const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Api is running')
})


app.get('/api/products', (req, res) => {
    res.json(products);
})
 
app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id)
    res.json(product);
})

app.listen(port, () => console.log('listening on port ' + port));