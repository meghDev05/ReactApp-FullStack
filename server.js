const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret', // a secrete key used to encrypt the session cookie
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    } // set the session cookie properties
}));


app.get('/', (req, res) => {
    if(req.session.name){
        return res.json({valid: true, name: req.session.name})
    } else {
        return res.json({valid: false})
    }
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "devanshtechadmin"
})

// ***************  SIGN-UP SERVER CODE  ********************************

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

// ***************  LOGIN SERVER CODE  ********************************

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            req.session.name = data[0].name;
            console.log(req.session.name);
            return res.json({Login: true })
        } else {   
            return res.json({Login: false})
        }
    })
})

// ***************  PRODUCT SERVER CODE  ********************************

app.get("/products", (req, res) => {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, data) => {
        if(err){ 
            return res.json("This is Error"); 
        }
        return res.json(data);
    })
    
})

app.post('/products', (req, res) => {
    const sql = "INSERT INTO products (`product`,`details`,`category`,`price`) VALUES (?)";
    const values = [
        req.body.product,
        req.body.details,
        req.body.category,
        req.body.price
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.put('/updateproduct/:id', (req, res) => {
    const sql = "update products set `product` = ?, `details` = ?, `category` = ?, `price` = ? where id = ?";
    const values = [
        req.body.product,
        req.body.details,
        req.body.category,
        req.body.price
    ]
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.delete('/products/:id', (req, res) => {
    const sql = "DELETE FROM products WHERE ID = ?";
    const id = req.params.id;
    
    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})  
// *************** END-PRODUCT-SERVER-CODE-END ********************************


// ***************  RAW MATERIAL SERVER CODE START ********************************

// app.get("/rawmaterial", (req, res) => {
//     const sql = "SELECT * FROM rawmaterial";
//     db.query(sql, (err, data) => {
//         if(err){ 
//             return res.json("This is Error"); 
//         }
//         return res.json(data);
//     }) 
// })

app.listen(8081, () => {
    console.log("listening from dashboard")
})