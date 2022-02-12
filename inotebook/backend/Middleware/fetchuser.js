var jwt = require('jsonwebtoken');
const JWT_SECRET='sanketisagoodboy';// secrete key to sign webtoken
const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');//fetching token which user sent in  header of req
    
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {       
        
        const data = jwt.verify(token, JWT_SECRET);//this fn will return payload
 
        req.user = data.user;

        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchuser; 