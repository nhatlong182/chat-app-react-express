import express from 'express';
import Conversation from '../models/conversationModel.js'

const conversationRouter = express.Router();

//create conversation
conversationRouter.post('/', async (req, res) => {
    const newConv = new Conversation({
        members: [req.body.senderId, req.body.receiveId]
    })

    try {
        const conversation = await newConv.save();
        res.status(200).send(conversation)
    } catch (error) {
        res.status(500).send(error)
    }
})

//get conversation of user
conversationRouter.get('/:userId', async (req, res) => {
    const conversation = await Conversation.find({
        members: { $in: [req.params.userId] }
    })

    if (conversation) {
        res.status(200).send(conversation)
    } else {
        res.status(404).send('Không tìm thấy')
    }
})


export default conversationRouter