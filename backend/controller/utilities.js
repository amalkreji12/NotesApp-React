const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; 

    if (!token) {
        console.log("No token found"); 
        return res.sendStatus(401);
    }


    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log("Error verifying token:", err); 
            return res.sendStatus(401); 
        }
        req.user = user;
        next();
    });
}

module.exports = {
    authenticateToken,
};
