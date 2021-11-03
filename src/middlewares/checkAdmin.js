function checkAdmin(req,res,next){
    if (req.url == '/adminlogin' || req.url == '/studentlogin' || req.isAdmin == 'activ') return next();
    if(Number(req.isAdmin) && req.method == 'GET' && req.url == '/student'){
        next()
    }else {
        throw new Error('Forbidden')
    }
}

export default checkAdmin