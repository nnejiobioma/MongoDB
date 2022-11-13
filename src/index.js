const express = require("express");
const connect = require('./config/database');

connect();

const app = express();



const PORT = process.env.PORT || 4000; //port to connect

app.get("/", (req, res) => {
    res.send("MongoDB Traning");
});

app.listen(PORT, () => console.log(`server runing on ${PORT}`));