const express = require('express');
const router = express.Router();
const userHelper = require('../controller/user-helper');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../controller/utilities');
const userModel = require('../models/userModel');


router.get('/', (req, res) => {
    res.json({ data: "hello world" })
});


router.post('/add-note', authenticateToken, (req, res) => {
    const { title, content, tags } = req.body;
    const user = req.user;
    const userId = user.user._id

    if (!user || !userId) {
        return res.status(401).json({ error: true, message: "Unauthorized: User not found" });
    }

    if (!title) {
        return res.status(400).json({ error: true, message: "Please enter a title" });
    }

    if (!content) {
        return res.status(400).json({ error: true, message: "Please enter a content" });
    }

    userHelper.addNote({ title, content, tags }, userId).then((note) => {
        res.json({
            error: false,
            note,
            message: "Note added successfully"
        });
    })
        .catch((error) => {
            res.status(500).json({
                error: true,
                message: "Error adding note"
            });
        });
});


router.put('/edit-note/:noteId', authenticateToken, (req, res) => {
    const noteId = req.params.noteId;
    const { title, content, tags, isPinned } = req.body;

    if (!title && !content && !tags) {
        return res.status(400).json({ error: true, message: "No changes were made" });
    }

    userHelper.editNote({ title, content, tags, isPinned }, noteId).then((note) => {
        res.json({
            eroor: false,
            note,
            message: "Note updated successfully"
        })
    })
        .catch((err) => {
            return res.status(500).json({
                error: true,
                message: "Error updating note", err
            });
        });
});


router.get('/notes', authenticateToken, (req, res) => {
    const user = req.user;
    const userId = user.user._id;

    userHelper.getAllNotesByUserId(userId).then((notes) => {
        return res.json({
            error: false,
            notes,
            message: "Notes found successfully",
        })
    })
        .catch((err) => {
            return res.json({
                error: true,
                message: "Error finding notes",
            });
        });
});


router.delete('/delete-note/:noteId', authenticateToken, async (req, res) => {
    const noteId = req.params.noteId;
    const userId = req.user.user._id;

    try {
        const deleteNote = await userHelper.deleteNoteByUserId(noteId, userId);
        if (!deleteNote) {
            return res.status(404).json({ error: true, message: "Note not found" });
        }
        return res.json({
            error: false,
            message: "Note deleted successfully",
        })
    } catch (error) {
        console.error("Error deleting note:", err);
        return res.status(500).json({
            error: true,
            message: "Internal Server Error",
        });
    };
});


router.put('/pin-note/:noteId', authenticateToken, (req, res) => {
    const noteId = req.params.noteId;
    const { isPinned } = req.body;

    userHelper.pinNote(noteId, isPinned).then((note) => {
        res.json({
            error: false,
            note,
            message: "Note pinned successfully",
        });
    })
    .catch((error) => {
        console.error('Error pinning note:', error);
        res.status(500).json({
            error: true,
            message: "Error pinning note",
            error
        });
    });
});











module.exports = router;