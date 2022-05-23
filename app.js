/*-------REQUIRE-------*/
const express = require("express");
const path = require ("path");
/*-------EXPRESS-------*/
const app = express();
/*-------TEMPLATE-------*/
app.set('view engine', 'ejs');
app.set("views");
app.listen(3050, () =>{console.log("arriba que la musica no pare")})
/*-------MIDDLEWARES-------*/
app.use(express.static(path.join (__dirname, '/public')));
/*-------REQUIRE DE RUTAS-------*/
const productsRouter = require("./src/routes/productosRuta")
const mainRoutes = require("./src/routes/main")
/*-------RUTAS-------*/
app.use("/", mainRoutes)
app.use("/", productsRouter)

/*-----PROCESAR INFORMACION-----*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(methodOverride("_method"));
//app.use((req, res, next) =>{
//res.status(404).render("not-found") crear archivo de vista con el html para mostrar con pagina de error
//})


