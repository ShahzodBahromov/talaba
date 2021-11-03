import db from '../lib/postgres.js'

const GET_STUDENT = `
    SELECT 
        s.id,
        s.fullname,
        s.phone,
        s.year,
        c.name as course
    from student s 
    join course c on c.id = s.course_id
    where s.status = 'activ' and case when $1 > 0 then s.id = $1 else true end
    order by id asc
`
const GET_ID_STUDENT = `
    SELECT * FROM student
    where id = $1

`

const INSERT_STUDENT = `
    INSERT INTO student(
        fullname,
        phone,
        year,
        course_id
    )VALUES($1, $2, $3, $4)
    RETURNING *
`

const UPDATE_STUDENT = `
    WITH old_data as (
        SELECT
        id,
        fullname,
        phone,
        year,
        course_id,
        status
        FROM student
        WHERE id = $1
    ) UPDATE student s SET
        fullname = (
            CASE
                WHEN length($2) > 0 THEN $2
                ELSE o.fullname
            END),
        phone = (
            CASE 
                WHEN length($3) > 0 THEN $3
                ELSE o.phone
            END),
        year = (
            CASE 
                WHEN $4 > 0 THEN $4
                ELSE o.year
            END),
        course_id = (
            CASE
                WHEN $5 > 0 THEN $5
                ELSE o.course_id
            END),
        status = (
            CASE
                WHEN length($6) > 0 THEN $6
                ELSE o.status
            END)
    FROM old_data o
    WHERE s.id = $1
    RETURNING s.*
`

const DELETE_STUDENT = `
    with old_data as (
        select
            id,
            status
        from 
        student
        where id = $1
    )update student s set
        status = 'deleted'
    from old_data as o 
    where s.id = $1
    returning s.*
`

const GetStudent = (isAdmin) => {
    try {
        return db(GET_STUDENT, [isAdmin == 'activ' ? -1 : isAdmin])
    } catch (error) {
        throw error
    }
}

const GetStudentId = ({ id }) => {
    try {
        return db(GET_ID_STUDENT, [id])
    } catch (error) {
        throw error
    }
}

const PostStudent = ({fullname, phone, year, course_id}) => {
    try {
        return db(INSERT_STUDENT, [fullname, phone, year, course_id])
    } catch (error) {
        throw error
    }
}

const PutStudent = ({id, fullname, phone, year, course_id, status}) => {
    try {
        return db(UPDATE_STUDENT, [id, fullname, phone, year, course_id, status])
    } catch (error) {
        throw error
    }
}

const DeleteStudent = ({ id }) => {
    try {
        return db(DELETE_STUDENT, [id])
    } catch (error) {
        throw error
    }
}

export default {
    GetStudent,
    GetStudentId,
    PostStudent,
    PutStudent,
    DeleteStudent
} 
