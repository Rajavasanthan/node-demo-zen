const express = require('express');
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());
let productData = [];

// Simple user data storage (in production, use a database)
let userData = [
     { id: 1, username: "admin", password: "admin123" },
     { id: 2, username: "user", password: "user123" }
];

app.get("/",(req,res) => {
     res.json({
          message: "Welcome to the API",
          endpoints: {
               "GET /": "Welcome message and available endpoints",
               "POST /product": "Create a new product",
               "GET /product": "Get all products", 
               "POST /login": "User login (requires username and password)"
          },
          sampleUsers: [
               { username: "admin", password: "admin123" },
               { username: "user", password: "user123" }
          ]
     })
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

// Login route
app.post("/login", (req, res) => {
     const { username, password } = req.body;
     
     // Validate input
     if (!username || !password) {
          return res.status(400).json({
               success: false,
               message: "Username and password are required"
          });
     }
     
     // Find user in userData
     const user = userData.find(u => u.username === username && u.password === password);
     
     if (user) {
          res.json({
               success: true,
               message: "Login successful",
               user: {
                    id: user.id,
                    username: user.username
               }
          });
     } else {
          res.status(401).json({
               success: false,
               message: "Invalid username or password"
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
