const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const authHeaders = req.headers.token

    if (!authHeaders) {
        res.status(401).json("You are not Authenticated..!")
    }
    else {

        const token = authHeaders.split(" ")[1]

        jwt.verify(token, process.env.JWT_KEY, (error, user) => {

            if (error) {
                res.status(403).json("Authentication Token is not Valid..!")
            }
            else {

                req.user = user
                next()

            }

        })

    }

}

const verifyTokenAndAuthorization = (req, res, next) => {

    verifyToken(req, res, () => {

        if (req.user.id === req.params.userId || req.user.isAdmin) {
            next()
        }
        else {
            res.status(403).json("Unauthorized User..!")
        }

    })

}

const verifyTokenAndAdmin = (req, res, next) => {

    verifyToken(req, res, () => {

        if (req.user.isAdmin) {
            next()
        }
        else {
            res.status(403).json("Unauthorized User..!")
        }

    })

}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
