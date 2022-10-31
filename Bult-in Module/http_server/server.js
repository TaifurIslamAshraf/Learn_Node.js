const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("<h1>my server</h1>");
});

myServer.listen(port, hostname, () => {
  console.log(`Your server is runnig at http://${hostname}:${port}`);
});
