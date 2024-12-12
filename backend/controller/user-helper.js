const User = require('../models/userModel');
const mongoose = require('mongoose');

module.exports = {

    doSignUp(userDetails, res) {
        return new Promise(async (resolve, reject) => {
            try {
                let isUserExist = await User.findOne({ email: userDetails.email });
                if (isUserExist) {
                    return res.json({
                        error: true,
                        message: 'User already exist',
                    });
                } else {
                    let user = await User.create(userDetails);
                    resolve(user);
                }
            } catch (error) {
                console.error('Error creating user', error);
                reject(error);
            };
        });
    },







}