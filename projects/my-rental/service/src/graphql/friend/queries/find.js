const FriendType = require('../FriendType')
const { Friend } = require('../../../models')
const { GraphQLString } = require('graphql')
module.exports = {
  type: FriendType,
  args: { _id: { type: GraphQLString }, name: { type: GraphQLString } },
  resolve(parentValues, args) {
    return Friend.findOne(args)
  }
}