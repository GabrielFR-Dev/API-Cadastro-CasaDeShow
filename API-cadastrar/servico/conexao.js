import mysql from 'myslq2/promise';
import env from 'dotenv';

env.config();

const pool = mysql.createPool({
    host: env.process.CS_HOST,
    user: env.process.CS_USER,
    password: env.process.CS_PASSWORD,
    database: env.process.CS_DATABASE
})

export default pool
