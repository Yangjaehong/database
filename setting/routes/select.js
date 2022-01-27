import express from "express"
import { selectSql } from "../database/sql"

const router = express.Router();

router.get('/', async function(req, res) {
    const user = await selectSql. get_users(); 

    res.render('select', {
        title: '예약정보', 
        user
    });
});

module.exports = router;