import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRouter from './routes/userRouter.js';

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlPath: true }, () => {
    console.log('connect to MongoDB successfully')
});


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRouter);


app.get('/', (req, res) => {
    res.send('server is running ok');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`);
})