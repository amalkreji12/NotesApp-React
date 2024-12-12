const express = require('express');
const router = express.Router();
const userHelper = require('../controller/user-helper');
const jwt = require('jsonwebtoken');
router.get('/', (req, res) => {
    res.json({ data: "hello world" })
});

router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;
    if (!fullName) {
        return res.status(400).json({ error: true, message: "Please enter a name" });
    };

    if (!email) {
        return res.status(400).json({ error: true, message: "Please enter email" });
    };

    if (!password) {
        return res.status(400).json({ error: true, message: "Please enter password" });
    };

    userHelper.doSignUp({ fullName, email, password }, res).then((user) => {
        const accessToken = jwt.sign({ user }, process.env.ACCESS_TOEN_SECRET, {
            expiresIn: "36000m",
        });

        res.json({
            error: false,
            user,
            accessToken,
            message: "Account created successfully"
        });
    });
});














module.exports = router;