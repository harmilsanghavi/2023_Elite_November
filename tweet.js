const express = require('express');
const mysql = require('mysql2');
const app = express();
const bodyParser = require('body-parser');


app.set('view engine', "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))



const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "2023_Elite"
 })

 conn.connect((err) => {
    if (err) throw err;
    console.log("succedd");
 })


app.get('/tweet',(req,res) =>
{
    res.render('tweet.ejs');
})

app.get('/tweet_show',(req,res) =>
{
   var image = `SELECT * FROM 2023_Elite.user_tweets where id in (3,4)`;
   conn.query(image,(err,data) =>{
     if(err) throw err;
     console.log(data);
     res.render('tweet.ejs',{data});
   })
})

app.get('/tweet_post',(req,res) =>
{
    res.render('tweet_post.ejs');
})

app.listen(8000);