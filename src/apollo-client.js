import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
	uri: "wss://sweet-flounder-83.hasura.app/v1/graphql",
	options: {
		reconnect: true,
		connectionParams: {
			headers: {
				"x-hasura-admin-secret":
					"oVcDcb3OHTxLwtkVzFMYS1x2NzwTN7Nm7bNqZ6PFcVmq4tCUpqtaHl9maErveZtg",
			},
		},
	},
});

const httpLink = new HttpLink({
	uri: "https://sweet-flounder-83.hasura.app/v1/graphql",
	headers: {
		"x-hasura-admin-secret":
			"oVcDcb3OHTxLwtkVzFMYS1x2NzwTN7Nm7bNqZ6PFcVmq4tCUpqtaHl9maErveZtg",
	},
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});

export default client;
