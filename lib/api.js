import { GraphQLClient, gql } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const graphQlClient = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
	},
});
export const getHomepage = async () => {
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

export const getSlug = async () => {
	const slugQuery = gql`
		{
			pageCollection(limit: 10) {
				items {
					slug
				}
			}
		}
	`;

	return graphQlClient.request(slugQuery);
};

export const getPages = async (slug) => {
	const pagesQuery = gql`
		query getPages($slug: String!) {
			pageCollection(where: { slug: $slug }, limit: 10) {
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

	return graphQlClient.request(pagesQuery, { slug });
};
