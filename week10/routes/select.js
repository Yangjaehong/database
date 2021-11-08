import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    const department = await selectSql.getDepartment(); //department를 불러옴
    const student = await selectSql.getStudent(); //student를 불러옴

    res.render('select', {
        title: 'IT 공대', //각각 타이틀 1,2로 나누어 필요한 말을 넣음
        title2: '학생 정보',
        department,
        student
    });
});

module.exports = router;