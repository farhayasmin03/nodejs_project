const http =  require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
    var q = url.parse(adr,true);
    res.write(q.hostname+'</br>');
    res.write(q.path+'</br>');
    res.write(q.pathname+'</br>');
    var qdata = q.query;
    res.write(qdata.month);
    
    res.end();
    
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  