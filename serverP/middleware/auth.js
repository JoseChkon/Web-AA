module.exports.isAuthenticate = (req, res, next) => {
    if(req.isAuthenticated()){
        return next()
    } else (
        res.status(401).send('You must login first!')
    )
}