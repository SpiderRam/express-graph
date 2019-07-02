// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var cors = require('cors');

var PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ type: 'application/*+json' }));
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
// app.use(bodyParser.text({ type: 'text/html' }));
// app.use(cors());

// app.use(express.static("public"));

var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema  = buildSchema(`
    type Query {
        hello: String
    }
`);

var root = {
    hello: () => {
        return 'Hello World!';
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(PORT);
console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);