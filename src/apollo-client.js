import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://sweet-flounder-83.hasura.app/v1/graphql",
	cache: new InMemoryCache(),
	headers: {
		"x-hasura-admin-secret":
			"oVcDcb3OHTxLwtkVzFMYS1x2NzwTN7Nm7bNqZ6PFcVmq4tCUpqtaHl9maErveZtg",
	},
});

export default client;
