const graphQL = require('graphql')
const axios = require('axios')
const {
  GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull
} = graphQL

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => {
    return {
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      users: {
        type: new GraphQLList(UserType),
        resolve (parentValues, args) {
          return axios.get(`http://localhost:3000/companies/${parentValues.id}/users`)
            .then(resp => resp.data)
        }
      }
    }
  }
})

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => {
    return {
      id: { type: GraphQLString },
      firstName: { type: GraphQLString },
      age: { type: GraphQLInt },
      company: {
        type: CompanyType,
        resolve(parentValues, args) {
          return axios.get(`http://localhost:3000/companies/${parentValues.companyId}`)
            .then(resp => resp.data)
        }
      }
    }
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: { firstName: { type: new GraphQLNonNull(GraphQLString) },
              age: { type: new GraphQLNonNull(GraphQLInt) },
              companyId: { type: GraphQLString }},
      resolve (parentValues, {firstName, age}) {
        return axios.post('http://localhost:3000/users', { firstName, age })
          .then(resp => resp.data)
      }
    },
    removeUser: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve (parentValues, args) {
        return axios.delete(`http://localhost:3000/users/${args.id}`)
          .then(resp => resp.data)
      }
    },
    editUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        companyId: { type: GraphQLString }
      },
      resolve (parentValues, args) {
        return axios.patch(`http://localhost:3000/users/${args.id}`, Object.assign({}, args)).then(resp => resp.data)
      }
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve (parentValues, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(resp => resp.data)
      }
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve (parentValues, args) {
        return axios.get(`http://localhost:3000/companies/${args.id}`)
          .then(resp => resp.data)
      }
    },

  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})