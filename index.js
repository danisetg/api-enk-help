var express = require("express");
var routes = require("./routes/routes");
const Knex = require("knex");
var knexConfig = require("./database/knex_config");

// Initialize knex.
const knex = Knex(knexConfig);

var app = express();
app.use(routes);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});