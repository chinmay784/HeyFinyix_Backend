const express = require('express');
const { DbConnect } = require('./dataBase/db');
require('dotenv').config();
const cors = require("cors")
const empRoute = require("./routes/empRoute")
const app = express();

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello, World!');
}
);

app.use(express.json())
app.use(cors({origin:"*",credentials:true}))



app.use("/api/v1",empRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("Server API Is http://localhost:4000")
});

DbConnect()