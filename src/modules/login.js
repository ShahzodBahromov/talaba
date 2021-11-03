import db from '../lib/postgres.js'
import md5  from  'md5'

const ADMIN_LOGIN = `
    select
        username,
        password,
        status
    from 
        admin
    where 
        username = $1 and password = $2
`

const STUDENT_LOGIN = `
    select
        id,
        fullname,
        phone
    from
        student
    where fullname = $1 and phone = $2
`

const adminLogin = async ({ username, password }) => {
    try {
        return await db(ADMIN_LOGIN, [username, md5(password)])
    } catch (error) {
        throw error
    }
}

const studentLogin = async ({ fullname, phone }) => {
    console.log(fullname, phone);
    try {
        return await db(STUDENT_LOGIN, [fullname, phone])
    } catch (error) {
        
    }
}

export default {
    adminLogin,
    studentLogin
}