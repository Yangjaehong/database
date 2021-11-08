import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

//기존의 입력값을 불러온다
router.get('/employee', async (req, res) => {
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee',{
        title: "직원 테이블 갱신",
        emp_res
    });
});
//기존의 입력값을 불러온다
router.get('/department', async (req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment',{
        title: "부서 테이블 갱신",
        dept_res
    });
});

//수정을 누르면 update query실행
router.post('/employee', async (req, res) => {
    const vars = req.body;
    console.log(vars.salary);

    const data = {
        Salary: vars.salary
    }
    await updateSql.updateEmployee(data); 

    res.redirect('/select'); //select 페이지로 이동
});

//수정을 누르면 update query실행
router.post('/department', async (req, res) =>{
    const vars = req.body;
    console.log(vars.dname);

    const data = {
        Dname: vars.dname,
        Dnumber: vars.Dnumber
    }
    await updateSql.updateDepartment(data);

    res.redirect('/select'); //select 페이지로 이동
});

module.exports = router;