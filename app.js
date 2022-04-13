const express = require("express");
const app = express();
const path = require ("path");

app.use(express.static(path.join (__dirname, '/public')));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/productDetail.html"));
})
app.listen(3050, () =>{
console.log("arriba");
})