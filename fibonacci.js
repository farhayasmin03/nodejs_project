const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var i;
  var fibArray=[];
  fibArray[0]=0;
  fibArray[1]=1;
  for(i= 2; i<=10; i++){
    fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
  }
  var result = "";
  for(var j = 0; j<fibArray.length; j++){
      result = result + " " + fibArray[j];
  }
  res.end(result);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});