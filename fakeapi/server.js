var express = require("express");
var foo = require('./movie.json');
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// respond with "hello world" when a GET request is made to the homepage
app.get("/test", function(req, res, next) {
  res.send(foo);
  // console.log(foo)
});


app.get('/test/:id', (req, res, next) => {
  let item = req.params.id !== undefined ? foo.movies.find(obj => obj.id == req.params.id) : foo;
  res.send(item);
  // console.log(item)
});
  

app.listen(5000, () => console.log('Example app listening on port 3000!'))