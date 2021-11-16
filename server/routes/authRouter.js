import express from 'express';

const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.send('this is auth route')
})

export default authRouter;