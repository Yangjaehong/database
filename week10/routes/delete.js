import express from "express";
import {selectSql, deleteSql} from "../database/sql";

const router = express.Router();


router.get('/department', async (req, res) =>{ // delete/department로 바꿔줌 
    const department = await selectSql.getDepartment();

    res.render('deleteDepartment',{
        title: "전공 삭제",
        department
    })
});

router.get('/student', async (req, res) =>{ // delete/student로 바꿔줌
    const student = await selectSql.getStudent();
    res.render('deleteStudent',{
        title2: "학생 삭제", //타이틀을 학생삭제로 입력 해 줌
        student
    })
});


router.post('/department', async (req,res) => { 
    console.log('delete router:', req.body.delBtn); //버튼

    const data = {
        Dnumber: req.body.delBtn,
    };

    await deleteSql.deleteDepartment(data); //버튼에서 받은 값을 data로 넘겨줌 sql.js에서 받는다

    res.redirect('/delete/department');
});

router.post('/student', async (req,res) => {
    console.log('delete router:', req.body.delBtn1); //버튼을 department와 다르게 함

    const data2 = {
        Studentid: req.body.delBtn1,
    };

    await deleteSql.deleteStudent(data2); //data2를 이용하여 넘겨줌

    res.redirect('/delete/student');
});

module.exports = router;

