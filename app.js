const express = require("express");
const app = express();
const path = require ("path");

app.use(express.static(path.join (__dirname, '/public')));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/index.html"));
})
app.listen(3050, () =>{
console.log("arriba");
})
app.get("/carrito", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/carritoCompra.html"));
})
app.get("/registro", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/register.html"));
})
app.get("/acceso", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/login.html"));
})
app.get("/ficha", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/productDetail.html"));
})
