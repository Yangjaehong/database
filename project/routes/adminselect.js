import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    const airport = await selectSql.getAirport(); 
    const airplane = await selectSql.getAirplane();
    const leg_instance = await selectSql.getLeg_instance();


    res.render('adminselect', {
        airport,
        airplane,
        leg_instance
    });
});

module.exports = router;