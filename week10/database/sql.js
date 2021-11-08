import mysql from "mysql2";

//내 데이터베이스와 연결함
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'woghda22!!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

//select query
export const selectSql = {
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`); //select문 실행
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`); //select문 실행

        return rows
    },
    getStudent : async () => {
        const [rows] = await promisePool.query(`select * from student`); //select문 실행

        return rows
    },
}

//delete query
export const deleteSql = {
    deleteDepartment : async(data) =>{
        console.log(`deleteSql.deleteDepartment:`, data.Dnumber);
        const sql = `delete from department where Dnumber=${data.Dnumber}`;
        
        await promisePool.query(sql);
    },
    deleteStudent : async(data) =>{ //delete.js에서 Studentid를 넘겨줌
        console.log(`deleteSql.deleteStudent:`, data.Studentid);
        const sql = `delete from student where Studentid=${data.Studentid}`;  //studentid로 지정한 이유는 학생들 모두가 다르기 때문에 구별가능한 stduent id로 함
            
        await promisePool.query(sql);
        }
}
