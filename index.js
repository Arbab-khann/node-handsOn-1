const http = require("http");
const Data = require("./store");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>home page</h1>");
  } else if (req.url === "/help") {
    // res.write("<h1>help page</h1>");
    const convertedData = JSON.stringify(Data);
    res.write(convertedData);
    res.end();
  }
});

server.listen(5050, () => {
  console.log("started .........");
});
