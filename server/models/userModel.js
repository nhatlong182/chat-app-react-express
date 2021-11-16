import mongoose from 'mongoose'

const userChema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, min: 3, max: 20 },
    email: { type: String, unique: true, required: true, max: 50 },
    password: { type: String, required: true, min: 6 },
    avatar: { type: String, default: '' },
    coverPicture: { type: String, default: '' },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    isAdmin: { type: Boolean, default: false }
}, {
    timestamps: true
})

const User = mongoose.model('User', userChema)

export default User