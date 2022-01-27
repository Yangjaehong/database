import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'test', 
        password: 'woghda22!!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();


export const selectSql = {
    get_users : async () => {
        const [rows] = await promisePool.query(`select * from users`);
        return rows
    }
}
