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
const {
    itemType,
    deleteType,
    inventoryType
} = require('./model');
const {
    getItem,
    getItems,
    insertItems,
    deleteItem,
    insertInventory,
    getInventory
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
        },
        /**single inventory */
        inventory: {
            type: inventoryType,
            args: {
                inventoryId: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return getInventory({
                    id: args.inventoryId
                }).then(value => value[0]);
            }
        },
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
                return insertItems({
                    name: args.Name,
                    description: args.description
                }).then(value => value[0]);
            }
        },
        deleteItem: {
            type: deleteType,
            args: {
                itemId: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return deleteItem({
                    id: args.itemId,
                }).then(value => value);

                // return {
                //     message: "done",
                // }
            }
        },
        addInventory: {
            type: inventoryType,
            args: {
                itemId: {
                    type: GraphQLID
                },
                quantity: {
                    type: GraphQLInt
                }
            },
            resolve(parent, args) {
                return insertInventory({
                    id: args.itemId,
                    quantity: args.quantity
                }).then(value => value[0]);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});