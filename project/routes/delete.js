import express from "express";
import {selectSql, deleteSql} from "../database/sql";

const router = express.Router();


router.get('/Seat_reservation', async (req, res) =>{ 
    const Seat = await selectSql.getSeat_resevation();

    res.render('deleteSeat_reservation',{
        Seat
    })
});

router.post('/Seat_reservation', async (req,res) => { 
    
    const vars = req.body;
    const data = {
        Date: vars.date,
        Leg_number: vars.leg_number,
        User_User_id: vars.user_User_id
    };

    await deleteSql.deleteSeat_reservation(data);

    res.redirect('/delete/Seat_reservation');
});


router.get('/Airport', async (req, res) =>{ 
    const airport = await selectSql.getAirport();

    res.render('deleteAirport',{
        title2: "공항 정보 삭제",
        airport
    })
});

router.post('/Airport', async (req,res) => { 
    console.log('delete router:', req.body.delBtn); 

    const data = {
        Airport_code: req.body.delBtn,
    };

    await deleteSql.deleteAirport(data);

    res.redirect('/delete/Airport');
});

router.get('/Airplane', async (req, res) =>{ 
    const airplane = await selectSql.getAirplane();

    res.render('deleteAirplane',{
        title3: "비행기 정보 삭제",
        airplane
    })
});

router.post('/Airplane', async (req,res) => { 
    console.log('delete router:', req.body.delBtn);

    const data = {
        Airplane_id: req.body.delBtn,
    };

    await deleteSql.deleteAirplane(data); 
    res.redirect('/delete/Airplane');
});


router.get('/Leg_instance', async (req, res) =>{ 
    const leg_instance = await selectSql.getLeg_instance();

    res.render('deleteLeg_instance',{
        title4: "항공편 정보 삭제",
        leg_instance
    })
});

router.post('/Leg_instance', async (req,res) => { 

    const vars = req.body;
    const data = {
        Leg_number: vars.leg_number,
        Date: vars.date
    };

    await deleteSql.deleteLeg_instance(data); 

    res.redirect('/delete/Leg_instance');
});

module.exports = router;

