const { GraphQLList, GraphQLString } = require('graphql')
const FriendType = require('../FriendType')
const { Friend } = require('../../../models')
module.exports = {
  type: new GraphQLList(FriendType),
  args: { name: { type: GraphQLString } },
  resolve(parentValues, args) {
    return Friend.find({})
  }
}