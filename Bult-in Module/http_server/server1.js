const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam dolorum assumenda id nihil impedit nesciunt et ratione temporibus sequi.";

http
  .createServer((req, res) => {
    res.writeHead(201, "ok", { "Contant-Type": "text/html" });
    res.write("<h1>Hello</h1>");
    res.write(`<p>${text}</p>`);
    res.end();
  })
  .listen(port, hostname, () => {
    console.log(`server is runnig at http://${hostname}:${port}`);
  });
