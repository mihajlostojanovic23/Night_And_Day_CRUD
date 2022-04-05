const express = require ('express')
const app = express();
const bodyparser = require ('body-parser') // Middleware 
const mysql = require ('mysql');

const session = require('express-session');
const res = require('express/lib/response');
const { name } = require('ejs');


const connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "picerija",
    port: "3306"
})




app.set("view engine", "ejs");

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/img',express.static(__dirname + 'public/img'));
app.use('/js',express.static(__dirname + 'public/js'));

app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())
app.use(session({
    secret:"secret",
    resave: true, 
    saveUninitialized: true }
))



// Local variable for information about user or anythink
    app.use(function (req, res, next) {
        if(req.session.korisnik){
        res.locals.email = req.session.korisnik.email; 
        res.locals.name = req.session.korisnik.name
        res.locals.user = req.session.korisnik.user_info
        }
        else{
        res.locals.email = null;
        res.locals.name = null }
        next();
    })
   

app.get('/logout', (req,res)=> {
    req.session.destroy();
    res.render('login')
})








app.get('/create_product',(req,res)=> {
    res.render("create_article")
    
})

app.get('/menu', (req,res)=> {
     if(req.session.korisnik){
        var mail = req.session.korisnik.email; }
        else {
            mail = null
        }
   
    var sql = 'SELECT * FROM proizvodi'
   
    connection.query(sql, (err,result)=> {
        if (err) {
            res.status(500)
            return res.end(err.message)
        }
        res.status(200)
        res.render('menu', {proizvodi: result,
             mail: mail})
      
    })
    
})


app.get("/myacc", (req,res)=> {
    if(req.session.korisnik){
        var mail = req.session.korisnik.email; }
        else {
            mail = null
        }


        connection.query('SELECT * FROM korisnik WHERE email = ?', [mail],(err,result)=> {
            if(err) {
                res.status(500)
                return res.end(err.message)
            }
            res.status(200)
            res.render('acc', {korisnik: result})
            
        })
})

app.post('/update/:id', (req,res) => {
    var id = req.params.id
      connection.query("UPDATE korisnik SET ime='"+req.body.ime+"', prezime='"+req.body.prezime+"', datum_rodjenja='"+req.body.datum_rodjenja+"', email='"+req.body.email+"', password='"+req.body.password+"', username='"+req.body.username+"'  WHERE id= ?",[req.body.id] ,(err,result) =>{
        if (err) {
            res.status(500)
            return res.end(err.message)
        }
        
            res.status(200)
            
            res.redirect('/logout') 
    })
})
   

app.post('/delete_product/:id', (req,res) => {
    var id = req.params.id
    var sql = 'DELETE  FROM proizvodi WHERE id = ?'
    connection.query(sql,[id],(err,result)=>{
        if(err) {
            res.status(500)
            return res.end(err.message)
        }
        res.status(200)
        res.redirect('/menu')
    })
})

app.post('/update_product/:id',(req,res)=> {
    var id = req.body.id
    var sql="UPDATE proizvodi SET ime='"+ req.body.naziv+"', opis='"+ req.body.opis+"', slika='"+ req.body.slika+"', cena='"+ req.body.cena+"' WHERE id =" + id
    connection.query(sql, (err,result) => {
        if(err) {
            res.status(500)
            return res.end(err.message)
        }

        res.status(200)
        res.redirect('/menu')
    })
})


app.get('/product_izmena/:id', (req,res) => {
    var id = req.params.id
    var sql = 'SELECT * FROM proizvodi WHERE id ='+ id
    var values = [
        req.body.naziv,
        req.body.cena,
        req.body.slika,
        req.body.opis
    ];
    connection.query(sql,[values], (err,result)=> {
        if(err) {
            res.status(500)
            return res.end(err.message)
        }

        res.status(200)
        res.render("product_izmena", {product_change: result})
    })
})


app.get('/profil_izmena/:id', (req,res) => {
    var id = req.params.id
    var sql = 'SELECT * FROM korisnik WHERE id = '+ id
    var values = [
        [
            req.body.id,
            req.body.ime,
            req.body.prezime,
            req.body.datum_rodjenja,
            req.body.email,
            req.body.password,
            req.body.username,
            
        ]
    ]
   connection.query(sql,[values], (err,result)=> {
       if(err) {
           res.status(500);
           return res.end(err.message)
       }

       res.status(200)
       res.render('acc_izmena',{izmena: result})
   }) 
})


app.get('/contact',(req,res)=> {
    res.render('kontakt')
   
})

app.get('/register',(req,res)=> {
    res.render("register")
})

// ---------------- LOGIN -----------------

app.get('/login',(req,res)=> {
        res.render("login")
})

app.post('/login', (req,res)=> {
    var email = req.body.email;
    var password = req.body.lozinka; 
   
      connection.query("SELECT * FROM korisnik WHERE  email = ? AND password = ?", [ email, password], function (err, result) {
          
        if(result.length>0) {
                
                req.session.korisnik= {
                    email: email,
                    user_info: result
                }
                console.log(req.session.korisnik.name)
            
               res.status(200)
                res.redirect('/')
                return res.end("Uspesno logovanje")
            }
            if(err) {
                res.status(404)
                return res.end(err.message)
            }
             res.redirect('/login')

        })
}) 


app.get('/',(req,res)=> {
res.render('index')
})
/*
connection.connect(function(err) {
    if (err) throw err;
    console.log("Napravljen novi proizvod");
    var sql= "INSERT INTO korisnik (ime, prezime, datum_rodjenja, email, password, username) VALUES ?"
    var values= [
        [
            'Mihajlo', 'Stojanovic', '23.09.1999.', 'mihajlo@gmail.com', 'sifra', 'miksa'
        ]

    ]
    connection.query(sql,[values],(err,res)=>{
        if(err) throw err;
        console.log("Dodat proizvod" + res.affectedRows);
    })
})
*/

// ---------------------  USER REGISTER  ------------------------------
app.post('/register', (req,res)=>{
var sql = "INSERT INTO  korisnik (ime, prezime, datum_rodjenja, email, password, username) VALUES ?"
var values = [
[req.body.ime, 
req.body.prezime,
req.body.datum_rodjenja,
req.body.email, 
req.body.password, 
req.body.username] ]
console.log(values)
connection.query(sql,[values], (err,result) =>{
if(err) { res.status(500); return res.end(err.message); }
res.status(200);
res.redirect('login')
return res.end('Korisnik je dodat ');
})
})

app.post('/create_product', (req,res)=> {
    var sql = 'INSERT INTO proizvodi  (ime, opis, slika, cena) VALUES ?'
    var values = [
        [
            req.body.naziv,
            req.body.opis,
            req.body.slika,
            req.body.cena,
    
        ]
    ]
    connection.query(sql,[values], (err,result)=> {
        if(err) {
            res.status(500)
            return res.end(err.message)
        }
        res.status(200)
        res.redirect('menu')
        return res.end('Dodat je proizvod')
    })
    })



var port = 3000
app.listen(port)
