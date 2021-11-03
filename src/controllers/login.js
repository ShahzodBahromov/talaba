import model from '../modules/login.js'
import jwt from '../lib/jwt.js'

const ADMINPOST = async(req, res) => {
    try {
        const logged = await model.adminLogin(req.body)
        if (logged[0].status == 'activ') {
            const token = jwt.sign(logged[0].status)
            res.cookie('token', token)
            res.status(200).json({
                status: 200,
                message: "You are logged in!",
                token
            }) 
        } else throw new Error("Wrong password or username!")
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message,
            token: null
        })
    }
}

const STUDENTPOST = async(req, res) => {
    try {
        const logged = await model.studentLogin(req.body)
        if (logged[0].phone == req.body.phone && logged[0].fullname == req.body.fullname) {
            const token = jwt.sign(logged[0].id)
            res.cookie('token', token)
            res.status(200).json({
                status: 200,
                message: "You are logged in!",
                token
            }) 
        } else throw new Error("Wrong password or username!")
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message,
            token: null
        })
    }
}

export default {
    ADMINPOST,
    STUDENTPOST
}