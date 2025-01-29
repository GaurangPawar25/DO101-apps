// Import the Express module
var express = require('express'); 

// Create an instance of an Express application
app = express(); 

// Define a route for the root URL ('/')
app.get('/', function (req, res) {
  res.send('Hello World!\n'); // Send a response with 'Hello World!'
});

// Define another route for '/mars'
app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n'); // Send a response with 'Hello Mars!'
});

// Start the server and listen on port 8080
app.listen(8080, function () {
  console.log('Example app listening on port 8080!'); // Log message to indicate server is running
});
