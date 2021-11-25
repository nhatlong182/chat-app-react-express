import express from 'express';
import Message from '../models/messageModel.js'

const messageRouter = express.Router();

//create message
messageRouter.post('/', async (req, res) => {
    const newMessage = new Message(req.body)

    try {
        const mess = await newMessage.save();
        res.status(200).send(mess)
    } catch (error) {
        res.status(500).send(error)
    }
})

//get message
messageRouter.get('/:conversationId', async (req, res) => {
    const mess = await Message.find({
        conversationId: req.params.conversationId
    })

    if (mess) {
        res.status(200).send(mess)
    } else {
        res.status(404).send('Không tìm thấy')
    }
})


export default messageRouter