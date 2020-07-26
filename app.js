//==================================================
//DEPENDENCIES
//==================================================

var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");


//==================================================
//ROUTES
//==================================================
app.get("/",function(req,res)
{
		res.render("home");
		});

app.get("/home",function(req,res)
{
		res.render("home");
		});

app.get("/about",function(req,res)
{
		res.render("about");
		});

app.get("/investors",function(req,res)
{
		res.render("investors");
		});

app.get("/contact",function(req,res)
{
		res.render("contact");
		});

app.get("/subscribe",function(req,res)
{
		res.render("subscribe");
		});

app.get("/*",function(req,res)
{
		res.render("home");
		});


app.listen(process.env.PORT || 3000, process.env.IP, () =>{
	console.log('Serv3r has started');
});