const usonkrap = {
	name: 'park',
	age: 20,
	gender: 'male'
};

const resolvers = {
	Query: {
		person: () => usonkrap
	}
};

export default resolvers;
