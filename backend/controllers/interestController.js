const Interest = require('../models/interestModel');
const ErrorResponse = require('../utils/errorResponse');

//create Interest
exports.createInterest = async (req, res, next) => {
    console.log(req);
    const { name, email, phone, country, course } = req.body;

    try {
        const interest = await Interest.create({
            name,
            email,
            phone,
            country,
            course,
        });
        res.status(201).json({
            success: true,
            interest
        })
    } catch (error) {
        console.log(error);
        next(error);
    }

}

//show interests
exports.showInterest = async (req, res, next) => {
    try {
        const interest = await Interest.find().sort({ createdAt: -1 });
        res.status(201).json({
            success: true,
            interest
        })
    } catch (error) {
        next(error);
    }

}
