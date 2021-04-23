const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const connection = require('../helpers/db');
const {
    getItem
} = require('./resolver');

const itemType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        Name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
    })
})

/** Root Query */
const RootQuery = new GraphQLObjectType({
    name: 'RootType',
    fields: {
        item: {
            type: itemType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return getItem({
                    id: args.id
                }).then(value => value[0]);
            }
        },
    }
});

/**Mutation query */

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        /**Mutation fields */
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    // mutation: Mutation
});