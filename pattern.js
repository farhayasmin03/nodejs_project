const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (req.url == "/") {
    res.write("Send me some number, please…");
}else{
    var q = url.parse(req.url, true).query;
  var i,j;
  for(i=1;i<=q.num;i++){
      for(j=1;j<=i;j++){
          res.write('*')
      }
      res.write('</br>')
  }

}
  
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});