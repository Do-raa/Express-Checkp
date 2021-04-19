var express = require("express");
var app = express();
var router = express.Router(); 


app.set('view engine', 'pug');
app.set('views','./views');

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.render("home");
});

router.get("/services",function(req,res){
  res.render( "services");
});

router.get("/contact",function(req,res){
  res.render("contact");
});

app.use("/",router);

app.use("*",function(req,res){
  res.send(" Not found 404");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});

module.exports = router;
