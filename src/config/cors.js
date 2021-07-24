let allowedOrigins = ['http://localhost:8080']

 const cors = (req, res, next) => {
    var origin = req.headers.origin
    if (allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin)      
    }
    
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization,')
    
    next()
}

module.exports = {cors}