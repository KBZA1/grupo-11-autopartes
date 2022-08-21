function adminMiddleware (req, res, next) {
    
	if (req.session.userLogged  == undefined ) {
        
		return res.redirect('/');
        
	} else if (req.session.userLogged.categoria_id !== 1 ){

        return res.redirect('/');

    }
	next();
}

module.exports = adminMiddleware;