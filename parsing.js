const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url == "/") {
    res.write("Send me some query, please…");
  }else{
    var q = url.parse(req.url, true).query;
    if(parseInt(q.age)>18){
        res.write("you are eligable to vote"+" "+q.name)
    }else{
        res.write(q.name+" "+"you are not eligable");
    }
  }
  
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});