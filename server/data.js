import bcrypt from 'bcryptjs'

const data = {
    user: [
        {
            username: 'abcdef',
            email: 'aaaaaa@gmail.com',
            password: bcrypt.hashSync('123456', 8)

        },
        {
            username: 'hdasdjh',
            email: 'bbbbbb@gmail.com',
            password: bcrypt.hashSync('123456', 8)
        },
    ]
};

export default data