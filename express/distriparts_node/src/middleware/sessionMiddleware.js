function sessionMiddleware (req, res, next) {
    res.locals.userLogin = false;
    if(req.session.userLogged){
    res.locals.userLogin = true;     
    res.locals.userLogged = req.session.userLogged ;          
    }
    next()
}
module.exports = sessionMiddleware;
