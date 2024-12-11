const express = require('express');
const cors = require('cors');



const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());
app.use(
    cors({
        origin:"*",
    })
);

var userRouter = require('./routes/user');

app.use('/',userRouter);


app.listen(port,() => {
    console.log(`Server running at ${port}`);
})



