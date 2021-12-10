import express from "express";
import { updateSql, selectSql} from "../database/sql";

const router = express.Router();


router.get('/Seat_reservation', async (req, res) =>{ 
    const seat = await selectSql.getSeat_resevation(); 
    res.render('update_Seat_reservation',{
        seat
    })
});

router.post('/Seat_reservation', (req, res) => {
    const vars = req.body;
    const data = {
        Seat_number: vars.seat_number,
        User_User_id: vars.user_User_id,
        Leg_number: vars.leg_number
    };

    updateSql.updateSeat_reservation(data);
    res.redirect('/update/Seat_reservation');
});

router.get('/Airport', async (req, res) =>{ 
    const airport = await selectSql.getAirport(); 
    res.render('update_Airport',{
        airport
    })
});

router.post('/Airport', (req, res) => {
    const vars = req.body;
    const data = {
        Name: vars.name,
        Airport_code: vars.airport_code
    };

    updateSql.updateAirport(data);
    res.redirect('/update/Airport');
});

router.get('/Airplane', async (req, res) =>{ 
    const airplane = await selectSql.getAirplane(); 
    res.render('update_Airplane',{
        airplane
    })
});

router.post('/Airplane', (req, res) => {
    const vars = req.body;
    const data = {
        Total_number_of_seats: vars.total_number_of_seats,
        Airplane_id: vars.airplane_id
    };

    updateSql.updateAirplane(data);
    res.redirect('/update/Airplane');
});


router.get('/Leg_instance', async (req, res) =>{ 
    const instance = await selectSql.getLeg_instance(); 
    res.render('update_Leg_instance',{
        instance
    })
});

router.post('/Leg_instance', (req, res) => {
    const vars = req.body;
    const data = {
        Number_of_available_seat: vars.number_of_available_seat,
        Date: vars.date,
        Leg_number: vars.leg_number
    };

    updateSql.updateLeg_instance(data);
    res.redirect('/update/Leg_instance');
});


module.exports = router;