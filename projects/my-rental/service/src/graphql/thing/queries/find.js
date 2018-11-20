const ThingType = require('../ThingType')
const { Thing } = require('../../../models')
const { GraphQLString } = require('graphql')
module.exports = {
  type: ThingType,
  args: { _id: { type: GraphQLString }, description: { type: GraphQLString } },
  resolve(parentValues, args) {
    return Friend.findOne(args)
  }
}