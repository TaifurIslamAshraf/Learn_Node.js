const fs = require("node:fs");
const http = require("node:http");
const PORT = 3000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  //   console.log(req.url);

  const handleReadFile = (statusCode, filePath) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(statusCode, { "Contant-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "./views/index.html");
  } else if (req.url === "/About") {
    handleReadFile(200, "./views/contact.html");
  } else if (req.url === "/Contact") {
    handleReadFile(200, "./views/about.html");
  } else {
    handleReadFile(404, "./views/error.html");
  }
});

myServer.listen(PORT, hostName, () => {
  console.log(`Your server is running at http://${hostName}:${PORT}`);
});
