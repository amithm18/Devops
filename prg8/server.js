const http = require("http");

const port = 3000

const server = http.createServer((req, res) => {
    res.send("Hello from node.js");
});

server.listen(port, () => {
    console.log("server is running on port number" + port);
});