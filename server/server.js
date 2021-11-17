import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRouter from './routes/userRouter.js';
import authRouter from './routes/authRouter.js';
import postRouter from './routes/postRouter.js';



const app = express();
dotenv.config();

mongoose.connect('mongodb://localhost/chatapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, () => {
    console.log('connect to MongoDB successfully')
});




//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);


app.get('/', (req, res) => {
    res.send('server is running ok');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`);
})