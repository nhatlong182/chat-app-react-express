import express from 'express';
import Post from '../models/postModel.js';

const postRouter = express.Router();


//create new post
postRouter.post('/', async (req, res) => {


    res.send('ok')
})

//update post
postRouter.put('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post && post.userId === req.body.userId) {
        await Post.updateOne({ $set: req.body })

        res.status(200).send('Cập nhật thành công')
    } else {
        res.status(403).send('Không thể cấp nhật bài viết')
    }
})

//delete post
postRouter.delete('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post) {
        await post.remove();
        res.status(200).send('Bài viết đã được xóa');
    } else {
        res.status(404).send('Bài viết không tồn tại');
    }
})

//like or dislike a post
postRouter.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (post && !post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).send('Cập nhật thành công')
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).send('Cập nhật thành công')
        }
    } catch (error) {
        res.status(500).send(error);
    }
})


//get a post
postRouter.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post) {
        res.status(200).send(post)
    } else {
        res.status(404).send('Không tìm thấy bài viết')
    }
})

//get timeline
postRouter.get('/timeline', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send(error)
    }
})


postRouter.get('/seeder', async (req, res) => {
    await Post.deleteMany();
    await Post.insertMany(data.posts);

    res.send('ok')
})


export default postRouter;