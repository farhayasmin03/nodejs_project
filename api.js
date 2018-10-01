const http = require('http');
var Request = require('request');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var q = Request.get("https://hashnode.com/ajax/posts/hot", (error, response, body) => {
    if (error) {
      return console.dir(error);
    }
    var postArr = JSON.parse(body);
    for (var i = 0; i < postArr.posts.length; i++) {
      res.write('Title: ' + postArr.posts[i].title + '<br/>');
      res.write('Type: ' + postArr.posts[i].type + '<br/><br/><br/>');
    }
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});