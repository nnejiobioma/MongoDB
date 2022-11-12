const express = require("express");

const app = express();



const PORT = process.env.PORT || 4000; //port to connect

app.get("/", (req, res) => {
    res.send("Traning Blog");
});

app.listen(PORT, () => console.log(`server runing on ${PORT}`));