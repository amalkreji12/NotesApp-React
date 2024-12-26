const User = require('../models/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Note = require('../models/noteModel');
const { Mongoose } = require('mongoose');

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

    getUserDetails(userId) {
        return new Promise(async (resolve, reject) => {
            try {
                let user = await User.findOne({ _id: userId });
                resolve(user);
            } catch (error) {
                console.error('Error getting user', error);
                reject(error);
            };
        });
    },


    addNote(noteDetails, userId) {
        return new Promise(async (resolve, reject) => {
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
    },


    editNote(newNoteDetails, noteId) {
        return new Promise(async (resolve, reject) => {
            try {
                const note = await Note.findByIdAndUpdate({ _id: noteId },
                    {
                        $set: {
                            title: newNoteDetails.title,
                            content: newNoteDetails.content,
                            tags: newNoteDetails.tags,
                            isPinned: newNoteDetails.isPinned
                        },
                    },
                    { new: true }
                );
                resolve(note);
            } catch (error) {
                console.error('Error creating user', error);
                reject(error);
            }
        })
    },


    getAllNotesByUserId(userId) {
        return new Promise(async (resolve, reject) => {
            try {
                const note = await Note.find({ userId: userId }).sort({ isPinned: -1 });
                resolve(note);
            } catch (error) {
                console.error('Error creating user', error);
                reject(error);
            }
        });
    },


    deleteNoteByUserId(noteId, userId) {
        return new Promise(async (resolve, reject) => {
            try {
                const note = await Note.findOneAndDelete({ _id: noteId, userId: userId });
                resolve(note);
            } catch (error) {
                console.error('Error deleting note', error);
                reject(error);
            };
        })
    },

    pinNote(noteId, isPinned) {
        return new Promise(async (resolve, reject) => {
            try {
                let note = await Note.findByIdAndUpdate(noteId,
                    {
                        $set: {
                            isPinned
                        },
                    },
                    { new: true }
                );
                resolve(note);
            } catch (error) {
                console.error('Error pinning note', error);
                reject(error);
            };
        });
    },

    searchNotesByUser(searchWord, user) {
        return new Promise(async (resolve, reject) => {
            try {
                let searchTerm = searchWord.replace(/[^a-zA-Z0-9]/g, '_');

                const notes = await Note.find({
                    $or: [
                        { title: { $regex: new RegExp(searchTerm, "i") } },
                        { content: { $regex: new RegExp(searchTerm, "i") } }
                    ],
                }).where({ userId: new mongoose.Types.ObjectId(user) });
                resolve(notes)
            } catch (error) {
                console.error('Error searching notes:', error);
                reject(error);
            };
        });
    },




}