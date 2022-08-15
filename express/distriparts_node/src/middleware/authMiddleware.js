function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect('/acceso');
	}
	next();
}

module.exports = authMiddleware;