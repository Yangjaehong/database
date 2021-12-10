import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/Seat_reservation', async function(req, res) {
    const seat = await selectSql.getSeat_resevation(); 


    res.render('select', {
        title: '예약정보', 
        seat
    });
});

module.exports = router;