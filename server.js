const http = require("http");
const moment = require("moment");

const currentDate = moment();
const validateCurrenteDate = currentDate.isValid();
const formatValidDate = currentDate.format("MMMM Do YYYY, h:mm:ss a");
const bornDate = moment("1992-08-26");
const bornValidDate = bornDate.isValid();
const formatBornDate = bornDate.format("MMM Do YY");

const diff = currentDate.diff(bornDate, "days");
// const diffInFormat = diff(diff,);
console.log(diff);

const server = http.createServer((req, res) =>
  res.end(`Hoy tenes ${diff} dias de edad`)
);

const PORT = 8080;
const callback = () => console.log("server ready guachito on port" + PORT);

server.listen(PORT, callback);
