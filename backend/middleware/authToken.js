const jwt = require('jsonwebtoken');

const { TOKEN_SECRET_KEY } = process.env;

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token;

        console.log("Token received:", token);
        if (!token) {
            return res.status(401).json({
                message: "Please login to access this resource.",
                error: true,
                success: false
            });
        }

        jwt.verify(token, TOKEN_SECRET_KEY, (err, decoded) => {
            if (err) {
                console.log("Error verifying token:", err);
                return res.status(403).json({
                    message: "Invalid or expired token. Please login again.",
                    error: true,
                    success: false
                });
            }

            console.log("Decoded token:", decoded);
            req.userId = decoded._id; // Ensure the token payload includes _id

            next();
        });

    } catch (err) {
        console.error("Error in authToken middleware:", err);
        res.status(500).json({
            message: "Internal server error",
            error: true,
            success: false
        });
    }
}

module.exports = authToken;