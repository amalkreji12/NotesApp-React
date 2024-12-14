require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { authenticateToken} = require('./controller/utilities');
const db = require('./controller/connection');

const app = express();
const port = 3000 ;

db.connect();


app.use(express.json());
app.use(
    cors({
        origin:"*",
    })
);


var userRouter = require('./routes/user');
var authRouter = require('./routes/auth');

app.use('/',userRouter);
app.use('/',authRouter);



app.listen(port,() => {
    console.log(`Server running at ${port}`);
})


