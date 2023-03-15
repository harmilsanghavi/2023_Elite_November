const body = require('body-parser');
var express = require('express');
var app = express();
app.use(body.urlencoded({ extended: false }))
app.use(body.json())
app.use(express.static('assets'))
const bcrypt = require('bcrypt')
const util = require("util");
const mysql = require("mysql2");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const { name } = require('ejs');
app.set('view engine', 'ejs');
app.use(cookieParser());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Elite"
}); 

app.get("/signup", function (req, res) {
    res.render("sign_up.ejs");
});

app.get("/login", function (req, res) {
    res.render("login.ejs");
});

const query = util.promisify(con.query).bind(con);
con.connect((err)=>{
    if(err) throw err;
    console.log("connected");
})

app.post("/registration", async(req,res)=>{
    var name = req.body.name;
    var uname = req.body.uname;
    var email = req.body.email;
    var password = req.body.password;
    var encryptpass = await bcrypt.hash(password,10);
    var activate = 0;

    // console.log(encryptpass)

    var insert = await query(`insert into twitter_registration(name,username,email,password,activate) values('${name}','${uname}','${email}','${encryptpass}','${activate}')`)
    res.render("activation.ejs",{email})
})

app.get("/activate_linik",async(req,res)=>{
    var email = req.query.email;
    var active_data = await query (`update twitter_registration set activate = 1 where email='${email}'`)
    res.redirect("/login")
})

app.listen(5004, function () {
    console.log("server is listening!!!");
});