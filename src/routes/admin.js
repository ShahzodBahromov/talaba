import express from 'express'
import controller from '../controllers/admin.js'

const router = express.Router()

router
    .get('/admin',controller.GET)
    .get('/admin/:id', controller.GETID)
    .post('/admin', controller.POST)
    .put('/admin',controller.PUT)
    .delete('/admin',controller.DELETE)

export default router