import express from 'express'
import controller from '../controllers/talaba.js'

const router = express.Router()

router
    .get('/student', controller.GET )
    .get('/student/:id', controller.GETID )
    .post('/student', controller.POST )
    .put('/student', controller.PUT )
    .delete('/student', controller.DELETE )
    
export default router