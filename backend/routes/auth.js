const express = require('express');
const router = express.Router();
const userHelper = require('../controller/user-helper');
const jwt = require('jsonwebtoken');


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

        const accessToken = jwt.sign({ user: { _id: user._id, email: user.email } }, process.env.ACCESS_TOKEN_SECRET, {
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

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Invalid email" });
    }

    if (!password) {
        return res.status(400).json({ message: "Invalid password" });
    }

    userHelper.doLogin({ email, password }).then((userDetails) => {
        if (userDetails) {
            const user = { user: userDetails };
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "36000m",
            });

            return res.json({
                error: false,
                message: "Login Success",
                email,
                accessToken,
            });

        } else {
            return res.status(400).json({
                error: true,
                message: "Login Failure",
            });
        }

    })
});


module.exports = router;