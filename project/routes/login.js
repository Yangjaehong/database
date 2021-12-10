import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body;
    const users = await selectSql.getUsers();
    console.log(users);
    let whoAmI = '';
    let checkLogin = false;

    users.map((user) => {
        if(vars.id === user.User_id && vars.password === user.User_password){ //일치하면 로그인
            console.log('login success!');
            checkLogin = true;
            if(vars.id ==='admin'){
                whoAmI = 'admin';
            } else {
                whoAmI = 'user';
            }
        }
    })

    if (checkLogin && whoAmI === 'admin') { 
        res.redirect('/adminselect'); //admin으로 로그인시 delete/department로 이동함
    } else if (checkLogin && whoAmI === 'user'){ 
        res.redirect('/select/Seat_reservation'); //user로 로그인하면 select로 이동함
    } else{
        console.log('login falied!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/'</script>"); //실패시 문구
    }
})

module.exports = router;