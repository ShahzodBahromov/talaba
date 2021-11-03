import model from '../modules/admin.js'

const GET = async (req, res) => {
    try {
        res.json(await model.GetAdmin())
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            data: null
        })
    }
}

const GETID = async (req, res) => {
    try {
        res.json(await model.GetIdAdmin(req.params))
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            data: null
        })
    }
}

const POST = async (req, res) => {
    try {
        const user = await model.PostAdmin(req.body)
        if(user) {
            res.json({
                status: 201,
                message: 'Add admin',
                data: user
            })
        } else throw new Error('Not admin')
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            data: null
        })
    }
}

const PUT = async (req, res) => {
    try {
        const user = await model.PutAdmin(req.body)
        if(user){
            res.json({
                status: 201,
                message: 'The admin update',
                data: user
            })
        } else throw new Error('Not admin')
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            data: null
        })
    }
}

const DELETE = async (req, res) => {
    try {
        const user = await model.DeleteAdmin(req.body)
        if(user){
            res.json({
                status: 201,
                message: 'The admin delete',
                data: user
            })
        } else throw new Error('Not admin')
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            data: null
        })
        
    }
}
export default {
    GET,
    GETID,
    POST,
    PUT,
    DELETE
}