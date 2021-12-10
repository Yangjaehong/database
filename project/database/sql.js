import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'airline', 
        password: 'woghda22!!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

//select query
export const selectSql = {
    getSeat_resevation : async () => {
        const [rows] = await promisePool.query(`select * from seat_reservation`); 
        return rows
    },
    getAirport : async () => {
        const [rows] = await promisePool.query(`select * from airport`); 

        return rows
    },
    getAirplane : async () => {
        const [rows] = await promisePool.query(`select * from airplane`); 

        return rows
    },
    getLeg_instance : async () => {
        const [rows] = await promisePool.query(`select * from leg_instance`); 

        return rows
    },
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`); 
        return rows
    },
    getReservation_view : async () => {
        const [rows] = await promisePool.query(`select * from reservation_view`); 
        return rows
    },
}

export const deleteSql = {
    deleteSeat_reservation : async(data) =>{
        const sql = `delete from seat_reservation where Date = "${data.Date}" and Leg_number="${data.Leg_number}" and User_User_id = "${data.User_User_id}"`;
        
        await promisePool.query(sql);
    },
    deleteAirport : async(data) =>{
        const sql = `delete from airport where Airport_code=${data.Airport_code}`;
        
        await promisePool.query(sql);
    },
    deleteAirplane : async(data) =>{
        const sql = `delete from airplane where Airplane_id=${data.Airplane_id}`;
        
        await promisePool.query(sql);
    },
    deleteLeg_instance : async(data) =>{
        const sql = `delete from Leg_instance where Leg_number="${data.Leg_number}" and Date ="${data.Date}"`;
        
        await promisePool.query(sql);
    },
}

export const insertSql = {
    setSeat_reservation : async (data) => {
        const sql = `insert into Seat_reservation values ("${data.Date}", "${data.Leg_number}", "${data.User_User_id}","${data.Seat_number}" )`;
    
        await promisePool.query(sql);
    },
    setAirport : async (data) => {
        const sql = `insert into Airport values ("${data.Name}", "${data.City}", "${data.Airport_code}")`;
        
        await promisePool.query(sql);
    },

    setAirplane : async (data) => {
        const sql = `insert into Airplane values ("${data.Airplane_id}", "${data.Total_number_of_seats}", "${data.Airplane_type}" )`;
    
        await promisePool.query(sql);
    },

    setLeg_instance : async (data) => {
        const sql = `insert into Leg_instance values ("${data.Leg_number}", "${data.Date}", "${data.Number_of_available_seat}", "${data.Airplane_id}")`;
        
        await promisePool.query(sql);
    },
}

export const updateSql = {
    updateSeat_reservation : async (data) => {
        console.log(`deleteSql.deleteSeat_reservation:`, data.User_User_id,data.Seat_number,data.Leg_number );
        const sql = `update seat_reservation set Seat_number ="${data.Seat_number}" where User_User_id = "${data.User_User_id}" and Leg_number ="${data.Leg_number}"`;
    
        await promisePool.query(sql);
    },
    updateAirport : async (data) => {
        const sql = `update Airport set Name = "${data.Name}" where Airport_code = "${data.Airport_code}"`;
        
        await promisePool.query(sql);
    },

    updateAirplane : async (data) => {
        const sql = `update Airplane set Total_number_of_seats = "${data.Total_number_of_seats}" where Airplane_id = "${data.Airplane_id}"`;
    
        await promisePool.query(sql);
    },

    updateLeg_instance : async (data) => {
        const sql = `update Leg_instance set Number_of_available_seat = "${data.Number_of_available_seat}" where Leg_number = "${data.Leg_number}" and Date = "${data.Date}"`;
        
        await promisePool.query(sql);
    },
}