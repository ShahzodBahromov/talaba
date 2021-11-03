import  express  from 'express'
import cookie from 'cookie-parser'
import validateCookie from './middlewares/checktoken.js'
import validateStudent from './middlewares/checkAdmin.js'

import {PORT, host} from './config.js'
import AdminRouter from './routes/admin.js'
import UserRouter from './routes/talaba.js'
import LoginRouter from './routes/login.js'

const app = express()

app.use( express.json() )
app.use( cookie() )
app.use( validateCookie,validateStudent )
app.use( AdminRouter )
app.use( UserRouter )
app.use( LoginRouter )

app.listen(PORT, () =>{
    console.log('Server is running on http://' + host + ':' + PORT);
})