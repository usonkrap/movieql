import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolver';

const server = new GraphQLServer({
	typeDefs: 'graphql/schema.graphql',
	resolvers		// ES6 <- resolvers: resolvers
});

server.start(() => console.log('Graphql Server Running'));
