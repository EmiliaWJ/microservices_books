const mongoose = require('mongoose');

mongoose.model('books', {
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    },
});
