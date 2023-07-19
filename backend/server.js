import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
connectDB();
import cors from 'cors'
import { notFound, errorHandler  } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
const port = process.env.PORT || 5000 ;

const app = express();
// cookieParser
app.use(cookieParser());
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,       
}))

app.get('/', (req, res) => {
    res.send('Api is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)



app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log('listening on port ' + port));