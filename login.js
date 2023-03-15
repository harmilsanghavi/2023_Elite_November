const express = require('express');
const mysql = require('mysql2');
const app = express();
app.set("view engine", "ejs");
const bodyParser = require("body-parser");
const e = require('express');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require('path')
const bcrypt = require("bcryptjs")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const util = require('util')
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "login_data",
});
var query = util.promisify(con.query).bind(con);
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
app.get("/login", (req, res) => {
    res.render("login");
})







app.get("/email",async(req, res)=>{
    var email = req.query.email_login;
    var emailsql=await query(`select email from  login_data.registretion_data where email='${email}'`)
    console.log(emailsql);
    if(emailsql.length < 0){
        console.log("true");
        res.json({exist:true})
    }else{
        console.log("false");
        res.json({exist:false})
    }
})




app.get("/login", (req, res) => {
    res.render("login");
})

app.post('/login', async (req, res) => {

    const { email_login, password_login } = req.body;
    var varifyUser = `select * from registretion_data where activated = 1 and email = '${email_login}'`;



    var result = await query(varifyUser);
    console.log(result);
    if (result.length == 0) {
        res.json("1")
        //return res.send(`<h1>user not regitered please register to <a href="/">click here</a></h1>`)
    }
    console.log(result[0]);
    const data = result[0];
    //comparing password
    var bpass = result[0].user_password;
    console.log("bpass", bpass)
    var match = await bcrypt.compare(password_login, bpass);
    console.log(match);
    if (!match) {
        return res.send(`wrong password!`)
    }

    //generating jwt token
    const jwtToken = jwt.sign(result[0], "tulsi");
    res.cookie("jwtToken", jwtToken);

    res.redirect('/home');

})









app.listen(8000,(err)=>{
    if(err) throw err
});