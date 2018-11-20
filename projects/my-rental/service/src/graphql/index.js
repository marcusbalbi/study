const graphQL = require('graphql')
const {
  GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull
} = graphQL

const Friend = require('./friend')
const Thing = require('./thing')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => {
    return Object.assign({}, Friend.queries, Thing.queries)
  }
})

module.exports = RootQuery

module.exports = new GraphQLSchema({
  query: RootQuery 
})