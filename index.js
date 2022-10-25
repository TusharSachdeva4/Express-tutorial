//Express basics

const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res)=>{
    res.send("<h1>HELLO WORLD</h1>");
}); /*get is a method -> CRUD (create, read, update, delete)
CRUD in api world : GET, PUT, POST, DELETE*/

// app.get("/about", (req, res)=>{
//     res.send("<h1>About page</h1>");
// });

// app.get("/contact", (req, res)=>{
//     res.send("<h1>Contact page</h1>");
// });

app.post("/", ()=>{
    const userName= req.body.name = "Tushar";
});

app.listen(port, () => {
    console.log(`Server is working on port: ${port}`);
});