module.exports = (req,res,next) =>{
    if(req.session.userLogged){
        const locals = req.session.userLogged
        res.render({locals : locals})
    }
    next()
}