const express = require("express");
const app = express();
const path = require ("path");
app.set('view engine', 'ejs');
app.use(express.static(path.join (__dirname, '/public')));

const productsRouter = require("./src/routes/productosRuta")
const mainRoutes = require("./src/routes/main")


app.use("/", mainRoutes)

app.use("/", productsRouter)
//app.use(methodOverride("_method"));
//app.use((req, res, next) =>{
//res.status(404).render("not-found") crear archivo de vista con el html para mostrar con pagina de error
//})


app.listen(3050, () =>{console.log("arriba")})