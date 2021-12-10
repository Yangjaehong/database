import express from "express";
import { selectSql,insertSql} from "../database/sql";

const router = express.Router();


router.get('/Seat_reservation', async (req, res) =>{ 
    const view = await selectSql.getReservation_view(); 
    res.render('insert_Seat_reservation',{
        view
    })
});

router.post('/Seat_reservation', (req, res) => {
    const vars = req.body;
    const data = {
        Date: vars.date,
        Leg_number: vars.leg_number,
        User_User_id: vars.user_User_id,
        Seat_number: vars.seat_number
    };

    insertSql.setSeat_reservation(data);
    res.redirect('/insert/Seat_reservation');
});

router.get('/Airport', async (req, res) =>{ 
    res.render('insert_Airport',{

    })
});

router.post('/Airport', (req, res) => {
    const vars = req.body;
    const data = {
        Name: vars.name,
        City: vars.city,
        Airport_code: vars.airport_code
    };

    insertSql.setAirport(data);
    res.redirect('/insert/Airport');
});

router.get('/Airplane', async (req, res) =>{ 
    res.render('insert_Airplane',{
        
    })
});

router.post('/Airplane', (req, res) => {
    const vars = req.body;
    const data = {
        Airplane_id: vars.airplane_id,
        Total_number_of_seats: vars.total_number_of_seats,
        Airplane_type: vars.airplane_type
    };

    insertSql.setAirplane(data);
    res.redirect('/insert/Airplane');
});

router.get('/Leg_instance', async (req, res) =>{ 
    res.render('insert_Leg_instance',{
       
    })
});

router.post('/Leg_instance', (req, res) => {
    const vars = req.body;
    const data = {
        Leg_number: vars.leg_number,
        Date: vars.date,
        Number_of_available_seat: vars.number_of_available_seat,
        Airplane_id: vars.airplane_id
    };

    insertSql.setLeg_instance(data);
    res.redirect('/insert/Leg_instance');
});
module.exports = router;

