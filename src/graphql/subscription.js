import { gql } from "@apollo/client";

const SubscribeLikes = gql`
	subscription MySubscription($id: Int!) {
		user_by_pk(id: $id) {
			likes
		}
	}
`;

export { SubscribeLikes };
