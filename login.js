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
app.use(e.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "2023_Elite",
});
var query = util.promisify(con.query).bind(con);
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
app.get("/login", (req, res) => {
    res.render("login");
})












app.get("/login", (req, res) => {
    res.render("login");
})


app.get("/prof", (req, res) => {
    res.render("prof");
})


app.get("/changepassword", (req, res) => {
 
    res.render("changepassword")})

  
  app.post("/changepassword", async (req, res) => {
    const { user_id, password_old, password_new } = req.body;
    const id= req.body.uid;
    console.log(id);
    var sql = `SELECT * FROM 2023_Elite.Elite_User where id = ${id};`
    const result = await query(sql);;
    var oldPass = result[0].password;
    console.log("old p " + oldPass);
    var hashp = await bcrypt.hash(password_new, 10);
    var match = await bcrypt.compare(password_old, oldPass);
    console.log(match);
    if (match) {
      var sql1 = `update 2023_Elite.Elite_User set  password="${hashp}" where id= ${id};`
      var update = await query(sql1);
      console.log("edited");
      res.redirect('/prof');
    } else {
      res.send("old password not mathed");
     
    }
  })
  































































app.get("/deleteaccount", (req, res) => {
    res.render("prof");
})


app.get("/logout", (req, res) => {
    res.render("prof");
})

app.listen(8000,(err)=>{
    if(err) throw err
});