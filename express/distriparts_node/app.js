/*-------REQUIRE-------*/
const express = require("express");
const path = require ("path");
const methodOverride = require("method-override");
const session = require ("express-session");
const sessionMiddleware = require (path.join(__dirname, "/src/middleware/sessionMiddleware.js"))
/*-------EXPRESS-------*/
const app = express();
/*-------TEMPLATE-------*/
app.set('view engine', 'ejs');
app.set("views");
/**---------------------- */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  /*------------------------------------- */
app.listen(5001, () =>{console.log("Servidor corriendo")});
/*-------MIDDLEWARES-------*/
app.use(session({
    secret: "Esto es un secreto (?)",
    resave: false,
    saveUninitialized: false
}));
app.use(express.static(path.join (__dirname, '/public')));
app.use(sessionMiddleware);

/*-------REQUIRE DE RUTAS-------*/
const productsRouter = require("./src/routes/productosRuta");
const mainRoutes = require("./src/routes/main");
const userRoutes = require("./src/routes/users");
/*------ REQUIRE DE RUTAS por API ------*/
const apiUsersRouter = require("./src/routes/api/apiUserRoutes");
const apiProductsRouter = require("./src/routes/api/apiProductsRoutes");


/*-----PROCESAR INFORMACION-----*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

/*-------RUTAS-------*/
app.use("/", mainRoutes);
app.use("/", userRoutes);
app.use("/", productsRouter);

/*---- Rutas API -----*/
app.use("/api/users", apiUsersRouter);
app.use("/api/products", apiProductsRouter);


/*---- 404 -Not Found -----*/
app.use((req, res, next) =>{
res.status(404).render(path.join(__dirname,"../distriparts_node/src/views/products/BRUNO"))
})