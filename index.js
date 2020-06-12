const express = require('express');
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
console.log(process)
app.use(bodyParser.json());
let productData = [];


app.post("/product",(req,res) => {
     productData.push(req.body);
     res.json({
          message : "Product Created"
     })
})


app.get("/product",(req,res) => {
     res.json(productData);
})


app.listen(process.env.PORT | 3000,() => {
     console.log("App is listening in PORT 3000")
});

















// const { add, subract } = require("./calc");
// const port = 3000;
// // fs.readdir("D:/Zen Class/Batch 13", { withFileTypes: true }, (err, files) => {
// //   if (err) throw err;
// //   files.forEach(function (file) {
// //     console.log(`${file.name} - ${file.isDirectory()}`);
// //   });
// // });

// let httpServer = http.createServer((req,res) => {
//      res.end('okay');
// });

// httpServer.listen(port,(err) => {
//      console.log(`Server is listening in PORT ${port}`)
// });

// console.log(add(5, 5));
// console.log(subract(5, 5));
