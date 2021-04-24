const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

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