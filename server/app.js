const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const schema = require("./schema/schema");

const app = express();

// cors error handler
app.use(cors());

// connect to db
mongoose.connect(
  "mongodb+srv://Saikat:Xtremehard@nodeexpressprojects.50qvu.mongodb.net/GraphQL-Practice?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => {
  console.log("Connected");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
