import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path: path.join(process.cwd(), '.env')})

const host = 'localhost'
const PORT = process.env.PORT || 4500

const pgConfig = {
    user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	port: process.env.PGPORT,
	database: process.env.PGDATABASE,
}

export {
    PORT,
    host,
    pgConfig
}