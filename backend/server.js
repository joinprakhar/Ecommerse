import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js';
connectDB();
import cors from 'cors'
import { notFound, errorHandler  } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
const port = process.env.PORT || 5000 ;

const app = express();

app.use(cors({
    credentials: true,
    origin:  'http://localhost:3000',        
}))

app.get('/', (req, res) => {
    res.send('Api is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)



app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log('listening on port ' + port));