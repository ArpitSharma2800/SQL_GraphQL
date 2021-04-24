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
    getItem
} = require('./resolver');




/**Item Models */

exports.itemType = new GraphQLObjectType({
    name: 'Item',
    fields: () => ({
        // id: {
        //     type: GraphQLID
        // },
        itemId: {
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

exports.deleteType = new GraphQLObjectType({
    name: 'delete',
    fields: () => ({
        itemId: {
            type: GraphQLID
        },
        message: {
            type: GraphQLString
        },
    })
})

/**Item Models ended */

/**Inventory Models */

exports.inventoryType = new GraphQLObjectType({
    name: 'inventory',
    fields: () => ({
        inventoryId: {
            type: GraphQLID
        },
        itemId: {
            type: GraphQLID
        },
        quantity: {
            type: GraphQLInt
        },
        item: {
            type: this.itemType,
            args: {
                itemId: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return getItem({
                    id: parent.itemId
                }).then(value => value[0]);
            }
        }
    })
})


/**Inventory Models ended */