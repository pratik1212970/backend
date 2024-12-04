const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courses: {
        type: String,
        enum: ['English', 'Hindi', 'Marathi' ],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    bio: {
        type: String
    },
    rating: {
        type: Number,
        required: true,
    }
    
})

const instructor = mongoose.model('instructor', instructorSchema);
module.exports = instructor;