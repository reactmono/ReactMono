import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    googleId: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    avatar: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', userSchema);

export default User;
