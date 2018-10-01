const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (req.url == "/") {
        res.write("Send me some numbers, please…");
    } else {
        var q = url.parse(req.url, true).query;
        var sum = parseInt(q.num1) + parseInt(q.num2);
        res.write("" + sum);
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});