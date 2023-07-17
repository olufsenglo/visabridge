const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
        },
        email: {
            type: String,
            trim: true,
            required: [true, 'e-mail is required'],
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email'
            ]
        },
        phone: {
            type: String,
            required: [true, "phone is required"],
        },
        country: {
            type: String,
            required: [true, "country is required"],
        },
        course: {
            type: String,
            required: [true, "course is required"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Interest', interestSchema);
