// create the function to verify the token as a middleware

const jwt = require("jsonwebtoken");

async function verify_user(req, res, next) {
    const token = await req.headers['authorization']
    if (! token) 
        return res.status(401).json('Unauthorize user')
    
    try {
        const decoded = jwt.verify(token, process.env.secret_key);
        let id = decoded;
        req.user=id
        next()
        
    } catch (e) {
        res.status(400).json('Token not valid.Due to expiry of the Token')
    }
}
module.exports = verify_user;

