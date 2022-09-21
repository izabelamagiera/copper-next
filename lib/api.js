import { GraphQLClient } from "graphql-request";

export function request({ query, variables }) {
	const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
		},
	});
	return client.request(query, variables);
}
