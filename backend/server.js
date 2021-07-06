const express = require("express");
const app = express();

const userInfo = require("./router/userInfo");

port = process.env.PORT || 4100;

app.use("/user-infos", userInfo);

app.listen(port);
