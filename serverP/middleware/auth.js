module.exports.isAuthenticate = (req, res, next) => {
    if(req.user){
        next()
    } else (
        res.status(401).send('You must login first!')
    )
}