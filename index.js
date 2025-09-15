const express = require('express');
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());
let productData = [];

app.get("/",(req,res) => {
     res.send("Welcome")
})
app.post("/product",(req,res) => {
     productData.push(req.body);
     res.json({
          message : "Product Created"
     })
})


app.get("/product",(req,res) => {
     res.json(productData);
})

// Login Routes
app.get("/login",(req,res) => {
     res.json({
          message: "Login page - Send POST request with username and password"
     })
})

app.post("/login",(req,res) => {
     const { username, password } = req.body;
     
     // Simple hardcoded credentials for demonstration
     const validCredentials = {
          username: "admin",
          password: "password123"
     };
     
     if (!username || !password) {
          return res.status(400).json({
               message: "Username and password are required"
          });
     }
     
     if (username === validCredentials.username && password === validCredentials.password) {
          res.json({
               message: "Login successful",
               success: true,
               user: username
          });
     } else {
          res.status(401).json({
               message: "Invalid username or password",
               success: false
          });
     }
})


app.listen(process.env.PORT || 3000,() => {
     console.log("App is listening in PORT " + process.env.PORT)
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
