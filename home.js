const express = require('express');
const mysql = require('mysql2');
const app = express();
const bodyParser = require('body-parser');
const multer = require("multer");
//const upload = multer({ dest: "public/files" });
const util = require("util");
const compress_images = require("compress-images")


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
const query=util.promisify(conn.query.bind(conn));

conn.connect((err) => {
   if (err) throw err;
   console.log("succedd");
})

app.get('/index',(req,res) =>{
    var data="";
    res.render('home.ejs',{data});
})

app.get('/index1',(req,res) =>
{
    res.render('add.ejs');
})

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/files');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single('img');


app.post('/upload', async (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            console.log(err)
        } else {
            var FileName = req.file.filename;
            console.log(FileName);

            var imgsrc = '/files/' + req.file.filename;
            



            var  INPUT_path_to_your_images, OUTPUT_path;

// INPUT_path_to_your_images='http://127.0.0.1:8011/public/files/' + req.file.originalname;
INPUT_path_to_your_images='public/files/' + req.file.filename;

OUTPUT_path = "public/compress/";

compress_images(INPUT_path_to_your_images, OUTPUT_path, { compress_force: false, statistic: true, autoupdate: true }, false,
                { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
                { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
                { svg: { engine: "svgo", command: "--multipass" } },
                { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function (error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  }
)
 var compree_image =  "/compress/" + req.file.filename;
            var insertData = `INSERT INTO tweet(user_id,heading,description,media,compress_media)VALUES('1','${req.body.heading}','${req.body.desc}','${imgsrc}','${compree_image}')`
                conn.query(insertData, (err, result) => {
                if (err) throw err
               res.send("file uploaded");
          
                });
            
        }
    })
});
app.get('/imagesize',(req,res) =>
{
   var image = `select * from user_tweets where u_id=1`;
   conn.query(image,(err,data) =>{
     if(err) throw err;
  
     console.log(data[0].compress_media);
     
   var or_image = `select media from tweet where user_id=9`;
   conn.query(or_image,(err,data1) =>{
     if(err) throw err;
  
     console.log(data1);
     res.render('home.ejs',{img:data[0].compress_media,org_img:data1[0].media});
   })
})

//     <h3>Compressed_image:  </h3>
// <img src="<%=img%>">
// <h3>Original_image:  </h3>
// <img src="<%=org_img%>"></img>
})





app.post('/tweet_upload', async (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            console.log(err)
        } else {
            var FileName = req.file.filename;
            console.log(FileName);

            var imgsrc = '/files/' + req.file.filename;
            var insertData = `INSERT INTO user_tweets(u_id,heading,description,media_url)VALUES('1','${req.body.heading}','${req.body.desc}','${imgsrc}')`
                conn.query(insertData, (err, result) => {
                if (err) throw err
               res.send("file uploaded");
          
                });
            
        }
    })


});

app.get('/tweet_show',(req,res) =>
{
   var image = `select heading,description,media_url from user_tweets where u_id=1`;
   conn.query(image,(err,data) =>{
     if(err) throw err;
     console.log(data);
     res.render('home.ejs',{data});
   })
})



app.listen(2000);
