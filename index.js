var express = require('express');

var app = express()


// Simple String Responce
app.get("/1", function(req, res) {
  res.end('This is Simple String Responce')
})

app.post("/2", function(req, res) {
  res.end('This is Simple String Responce')
})

// responce status code
app.get('/3', function(req, res) {
  res.status(201).end()
})

// json responce
app.get('/4', function(req, res) {
  
  let MyJSONArray = [
    {
      name: "jwolt",
      city: "Dhaka",
      occupation: "Engeering"
    },
    {
      name: "Junaid",
      city: "Rajsgahi",
      occupation: "pharmaci"
    }, 
    {
      name: "Rifat",
      city: "Rangpur",
      occupation: "Student"
    }
  ]
  res.json(MyJSONArray)
})

app.get('/5', function(req, res) {
  res.download("./upload/abc.jpeg");
})

app.get('/bangladesh', function(req, res) {
  res.redirect("http://localhost:8000/india")
})

app.get('/india', function(req, res) {
  res.send('THis is INdia')
})



app.get('/6', function(req, res) {
  
  res.append("name", "jwolt Junaid")
  res.append("City", "Dhaka")
  res.append("age", "30 years old")
  res.status(201).send('Hello, World');
  
})

app.get('/7', function(req, res) {
  
  res.cookie("name", "jwolt Junaid")
  res.cookie("City", "Dhaka")
  res.cookie("age", "30 years old")
  res.end('Cookie set success')
})


app.get('/8', function(req, res) {
  
  res.clearCookie("name")
  res.clearCookie("age")
  res.clearCookie("City")
  res.end('Cookie clear')
})




app.listen(8000, function() {
  console.log("Server Run Success");
})