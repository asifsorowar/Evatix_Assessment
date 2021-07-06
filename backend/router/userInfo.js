const express = require("express");
const router = express.Router();
const graphqlHTTP = require("express-graphql");
const schema = require("../model/schema");

router.get(
  "/",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

module.exports = router;
