const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const reposType = new GraphQLObjectType({
  name: "Repos",
  fields: () => ({
    name: { type: GraphQLString },
    stargazers_count: { type: GraphQLInt },
  }),
});
