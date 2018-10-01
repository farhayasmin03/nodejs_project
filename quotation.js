const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  var array=["farha",'yasmin','harry','sam'];
  var result='';
  for(var i=0;i<=array.length;i++){
      result=result+" "+array[i]

  }
  res.end(result);
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});