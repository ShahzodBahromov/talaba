import jwt from '../lib/jwt.js'

function validateCookie(req, res, next) {
	if (req.url == '/adminlogin' || req.url == '/studentlogin') return next();
	if (!req.cookies.token) throw new Error("Token required");
	const isAdmin = jwt.verify(req.cookies.token);
	if (isAdmin == 'activ' || Number(isAdmin) ) {
        req.isAdmin = isAdmin
        next()}
	else throw new Error("Forbidden");
}

export default validateCookie;