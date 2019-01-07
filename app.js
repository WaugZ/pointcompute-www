const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('*', function(req, res) {
	res.sendFile(__dirname + "/" + "home.html")
});

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
