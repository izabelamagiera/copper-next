import { GraphQLClient, gql } from "graphql-request";

export const getHomepage = async () => {
	const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

	const graphQlClient = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
		},
	});

	const homepageQuery = gql`
		{
			pageCollection(where: { setAsHomepage: "homepage" }, limit: 10) {
				items {
					slug
					pageHero {
						header
						description
					}
					cta {
						textBold
						textNormal
						btnText
						btnLink
					}
					cardCollection {
						items {
							icon {
								url
							}
							header
							description
						}
					}
				}
			}
		}
	`;

	return graphQlClient.request(homepageQuery);
};
