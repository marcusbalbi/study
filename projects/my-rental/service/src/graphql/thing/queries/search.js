const { GraphQLList, GraphQLString } = require('graphql')
const ThingType = require('../ThingType')
const { Thing } = require('../../../models')
module.exports = {
  type: new GraphQLList(ThingType),
  args: { description: { type: GraphQLString } },
  resolve(parentValues, args) {
    return Thing.find({})
  }
}