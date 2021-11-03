import db from '../lib/postgres.js'
import md5 from 'md5'

const GET_ADMIN = `
    SELECT * FROM admin
    where status = 'activ'
`
const GET_ID_ADMIN = `
    SELECT * FROM admin
    where id = $1

`

const INSERT_ADMIN = `
    INSERT INTO admin(
        username,
        password
    )VALUES($1, $2)
    RETURNING *
`

const UPDATE_ADMIN = `
    WITH old_data as (
        SELECT
        id,
        username,
        password
        FROM admin
        WHERE id = $1
    ) UPDATE admin a SET
        username = (
            CASE
                WHEN length($2) > 0 THEN $2
                ELSE o.username
            END),
        password = (
            CASE 
                WHEN length($3) > 0 THEN $3
                ELSE o.password
            END)
    FROM old_data o
    WHERE a.id = $1
    RETURNING a.*
`

const DELETE_ADMIN = `
with old_data as (
    select
        id,
        status
    from 
    admin
    where id = $1
)update admin a set
    status = 'no activ'
from old_data as o 
where a.id = $1
returning a.*
`

const GetAdmin = () => {
    try {
        return db(GET_ADMIN)
    } catch (error) {
        throw error
    }
}

const GetIdAdmin = ({ id }) => {
    try {
        return db(GET_ID_ADMIN, [id])
    } catch (error) {
        throw error
    }
}

const PostAdmin = ({username, password}) => {
    try {
        return db(INSERT_ADMIN, [username, md5(password)])
    } catch (error) {
        throw error
    }
}

const PutAdmin = ({id, username, password=''}) => {
    try {
        return db(UPDATE_ADMIN, [id, username, md5(password)])
    } catch (error) {
        throw error
    }
}

const DeleteAdmin = ({ id }) => {
    try {
        return db(DELETE_ADMIN, [id])
    } catch (error) {
        throw error
    }
}

export default {
    GetAdmin,
    GetIdAdmin,
    PostAdmin,
    PutAdmin,
    DeleteAdmin
} 
