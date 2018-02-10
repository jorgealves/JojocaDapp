const express = require('express');
const serverPort = 3000;
const swig = require("swig");
const path = require("path");

let app = express();

app.engine(".html", swig.renderFile);

app.set("view engine", "html");

app.set("views", path.join(process.env.PWD, 'views'));

app.use("/app1", require("./routers/app1"));
app.use("/app2", require("./routers/app2"));

app.listen(3000, () => {
  console.log(`Server started on port ${ serverPort }`);
});