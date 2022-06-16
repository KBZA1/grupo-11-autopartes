/*-------REQUIRE-------*/
const express = require("express");
const path = require ("path");
const methodOverride = require("method-override");
const session = require ("express-session");
/*-------EXPRESS-------*/
const app = express();
/*-------TEMPLATE-------*/
app.set('view engine', 'ejs');
app.set("views");
app.listen(5001, () =>{console.log("arriba que la musica no pare")});
/*-------MIDDLEWARES-------*/
app.use(session({
    secret: "Esto es un secreto (?)",
    resave: false,
    saveUninitialized: false,
}));
app.use(express.static(path.join (__dirname, '/public')));

/*app.use(session({secret: "Aca esta tu session bb"}));*/
/*-------REQUIRE DE RUTAS-------*/
const productsRouter = require("./src/routes/productosRuta");
const mainRoutes = require("./src/routes/main");
const userRoutes = require("./src/routes/users");


/*-----PROCESAR INFORMACION-----*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
//app.use((req, res, next) =>{
//res.status(404).render("not-found") crear archivo de vista con el html para mostrar con pagina de error
//})

/*-------RUTAS-------*/
app.use("/", mainRoutes);
app.use("/", userRoutes);
app.use("/", productsRouter);



