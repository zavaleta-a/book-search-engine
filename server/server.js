const express = require("express");

const path = require("path");
const db = require("./config/connection");
// const routes = require("./routes");
const { authMiddleware } = require("./utils/auth");

//import apollo server
const { ApolloServer } = require("apollo-server-express");

//import typedefs and resolvers
const { typeDefs, resolvers } = require("./schemas"); //link schemas here

const app = express();
const PORT = process.env.PORT || 3001;

//apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

//apollo server with express
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

db.on("error", (err) => {
  console.error("DB connection error: ", err);
});
