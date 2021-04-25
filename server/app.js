const express = require("express");
const {
    graphqlHTTP
} = require('express-graphql');
const schema = require('../server/schema/schema')
const cors = require('cors');
const app = express();
app.use(cors());

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});