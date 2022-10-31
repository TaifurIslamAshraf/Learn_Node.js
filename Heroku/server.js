const http = require("node:http");
const fs = require("node:fs");
const PORT = 3000;

const handleRoute = (res, filePath, statusCode) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Contant-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    handleRoute(res, "./view/index.html", 200);
  } else if (req.url === "/about") {
    handleRoute(res, "./view/about.html", 200);
  } else if (req.url === "/contact") {
    handleRoute(res, "./view/contact.html", 200);
  } else {
    handleRoute(res, "./view/error.html", 404);
  }
});

myServer.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Your server is runnig at http://localhost:${PORT}`);
  }
});
