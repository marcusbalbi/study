const graphQL = require('graphql')
const {
  GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull
} = graphQL

const FriendType = new GraphQLObjectType({
  name: 'Friend',
  fields: () => {
    return {
      _id: { type: GraphQLString },
      name: { type: GraphQLString },
    }
  }
})

module.exports = FriendType