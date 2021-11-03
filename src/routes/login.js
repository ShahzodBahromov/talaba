import express from 'express'
import controller from '../controllers/login.js'

const router = express.Router()

router
    .post('/adminlogin', controller.ADMINPOST)
    .post('/studentlogin', controller.STUDENTPOST)
    
export default router