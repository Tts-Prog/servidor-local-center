import { typeDefs } from "./typedefs/typedef.js";
import { userResolver } from "./resolvers/user.resolvers.js";

export const resolvers = {
    Query: {
        ...userResolver.Query,
    },

    Mutation: {
        ...userResolver.Mutation,
    }
}

export { typeDefs }