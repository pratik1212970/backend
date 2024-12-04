const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
  
    category: {
        type: String,
        enum: ['English', 'Hindi', 'Marathi' ],
        required: true
    },
    createdby: {
        type: String,
        required: true,
       
    },
    duration: {
        type: String
    },
    price: {
        type: Number,
        required: true,
    }
    
})

const course = mongoose.model('course', courseSchema);
module.exports = course;