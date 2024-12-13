const User = require('../models/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Note = require('../models/noteModel');

module.exports = {

    doSignUp(userDetails, res) {
        return new Promise(async (resolve, reject) => {
            try {
                userDetails.password = await bcrypt.hash(userDetails.password, 10);

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

    doLogin(userDetails) {
        return new Promise(async (resolve, reject) => {
            try {
                let user = await User.findOne({ email: userDetails.email });
                if (user) {
                    bcrypt.compare(userDetails.password, user.password).then((response) => {
                        resolve(user);
                    })
                } else {
                    resolve(false);
                }

            } catch (error) {
                console.error('Error creating user', error);
                reject(error);
            }
        });
    },


    addNote(noteDetails,userId) {
        return new Promise(async (resolve,reject) => {
            try {
                const note = new Note({
                    title: noteDetails.title,
                    content: noteDetails.content,
                    tags: noteDetails.tags || [],
                    userId: userId,
                })
                await note.save();
                resolve(note);
                          
            } catch (error) {
                console.error('Error creating user', error);
                reject(error); 
            }
        });
    }






}