import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    const employee = await selectSql.getEmployee(); //employee를 불러옴
    const department = await selectSql.getDepartment(); //department를 불러옴
 
    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;