const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql
const Post = require('../MongoDBModels/PostDBModel')

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Post.findById(args.id)
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      args: { filter: { type: GraphQLString }, limit: { type: GraphQLID } },
      resolve(parent, args) {
        if (args.filter) {
          return Post.find({ name: { $regex: args.filter, $options: 'i' } }).limit(parseInt(args.limit))
        } else {
          return Post.find({}).limit(parseInt(args.limit))
        }
      },
    }
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPost: {
      type: PostType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let post = new Post({
          name: args.name,
          email: args.email,
          title: args.title,
          description: args.description,
        })
        return post.save()
      },
    },
    updatePost: {
      type: PostType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Post.findByIdAndUpdate(args.id, {
          name: args.name,
          email: args.email,
          title: args.title,
          description: args.description,
        }, { new: true })
      },
    },
    deletePost: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Post.findByIdAndDelete(args.id)
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})
