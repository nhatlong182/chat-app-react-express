import express from 'express';
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js';
import data from '../data.js'

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    const users = await User.find({});

    res.status(200).send(users);
})

userRouter.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(8);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, salt)
        });


        const user = await newUser.save();
        res.status(200).send(user)
    } catch (err) {
        console.log(err)
    }
})


userRouter.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send(user)
            return;
        }

    }
    res.status(404).send({ message: 'Sai tài khoản hoặc mật khẩu' })
})


userRouter.put('/:id', async (req, res) => {

})


userRouter.delete('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        await user.remove();
        res.status(200).send('Tài khoản đã được xóa');
    } else {
        res.status(404).send('Tài khoản không tồn tại');
    }
})

userRouter.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        const { password, updatedAt, ...other } = user._doc
        res.status(200).send(other);
    } else {
        res.status(404).send('Tài khoản không tồn tại');
    }
})

userRouter.put('/:id/follow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)

            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.body.userId } })

                res.status(200).send('Bạn đã theo dõi người này')
            } else {
                res.status(403).send('Bạn đã theo dõi người này rồi')
            }
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(403).send('Bạn không thể theo giỏi chính bạn')
    }
})

userRouter.put('/:id/unfollow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)

            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await currentUser.updateOne({ $pull: { followings: req.body.userId } })

                res.status(200).send('Bạn đã hủy theo dõi người này')
            } else {
                res.status(403).send('Bạn đã hủy theo dõi người này rồi')
            }
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(403).send('Bạn không thể hủy theo giỏi chính bạn')
    }
})




userRouter.get('/seeder', async (req, res) => {
    await User.deleteMany();
    await User.insertMany(data.user);

    res.send('ok')
})

export default userRouter;