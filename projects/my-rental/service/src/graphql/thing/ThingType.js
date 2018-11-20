const graphQL = require('graphql')
const {
  GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull
} = graphQL

const ThingType = new GraphQLObjectType({
  name: 'Thing',
  fields: () => {
    return {
      _id: { type: GraphQLString },
      description: { type: GraphQLString },
      type: { type: GraphQLString },
      purchaseDate: { type: GraphQLString },
    }
  }
})

module.exports = ThingType