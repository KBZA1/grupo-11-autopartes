const express = require("express");
const app = express();
const path = require ("path");
app.set('view engine', 'ejs');
app.use(express.static(path.join (__dirname, '/public')));

const productsRouter = require("./routes/productosRuta")
const mainRoutes = require("./routes/main")


app.use("/", mainRoutes)

app.use("/", productsRouter)


app.listen(3050, () =>{console.log("arriba")})