import express from "express";
import logger from "morgan";
import path from "path";

import loginRouter from "../routes/login"
import selectRouter from "../routes/select"
import adminselectRouter from "../routes/adminselect"
import deleteRouter from "../routes/delete"
import insertRouter from "../routes/insert"
import updateRouter from "../routes/update"

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', loginRouter);
app.use('/select', selectRouter);
app.use('/adminselect', adminselectRouter);
app.use('/delete', deleteRouter);
app.use('/insert', insertRouter);
app.use('/update', updateRouter);

app.listen(PORT, () => {
    console.log('Example app listening at http://localhost:${PORT}')
})