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
    itemType
} = require('./model');
const {
    getItem,
    getItems,
    insertItems
} = require('./resolver');


/** Root Query */
const RootQuery = new GraphQLObjectType({
    name: 'RootType',
    fields: {
        /**single item */
        item: {
            type: itemType,
            args: {
                itemId: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return getItem({
                    id: args.itemId
                }).then(value => value[0]);
            }
        },
        /* multiple item  */
        items: {
            type: new GraphQLList(itemType),
            resolve(parent, args) {
                return getItems().then(value => value);
            }
        }
    }
});

/**Mutation query */

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addItem: {
            type: itemType,
            args: {
                Name: {
                    type: GraphQLString
                },
                description: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                // let author = new Author({
                //     name: args.name,
                //     age: args.age
                // });
                return insertItems({
                    name: args.Name,
                    description: args.description
                }).then(value => {
                    args.Name, args.description
                });
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});