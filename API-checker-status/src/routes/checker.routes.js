const express = require("express");
const app = express();
const checker_controller = require("../controller/checker_controller");

app.get("/client_checker", checker_controller.list_rows);
app.post("/client_checker", checker_controller.insert_rows);

module.exports=app;