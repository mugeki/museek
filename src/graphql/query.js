import { gql } from "@apollo/client";

const GetPopularMusicianList = gql`
	query MyQuery {
		user(
			order_by: { likes: desc }
			limit: 4
			where: { published: { _eq: true } }
		) {
			id
			full_name
			img_link
			likes
			instrument
		}
	}
`;

const GetNewestMusicianList = gql`
	query MyQuery {
		user(
			order_by: { date_published: desc }
			limit: 4
			where: { published: { _eq: true } }
		) {
			id
			full_name
			img_link
			likes
			instrument
		}
	}
`;

const GetMusicianDetailByID = gql`
	query MyQuery($id: Int) {
		user(where: { id: { _eq: $id } }) {
			id
			full_name
			email
			about
			img_link
			instrument
			likes
			location
			phone
		}
	}
`;

const GetMusicianByFilter = gql`
	query MyQuery(
		$location: String
		$instrument: [String!]
		$date_published: order_by = asc
		$likes: order_by = asc
	) {
		user(
			where: {
				_and: {
					location: { _like: $location }
					instrument: { _in: $instrument }
				}
			}
			order_by: { date_published: $date_published, likes: $likes }
		) {
			id
			full_name
			img_link
			likes
			instrument
		}
	}
`;

const a = gql`
	query MyQuery(
		$location: String
		$instrument: [String!]
		$date_published: order_by = asc
		$likes: order_by = asc
	) {
		user(
			where: {
				_and: {
					location: { _like: $location }
					instrument: { _in: $instrument }
				}
				location: { _like: $_like }
				instrument: { _in: $_in1 }
			}
			order_by: { date_published: $date_published, likes: $likes }
		) {
			id
			full_name
			img_link
			likes
			instrument
		}
	}
`;

export {
	GetPopularMusicianList,
	GetNewestMusicianList,
	GetMusicianDetailByID,
	GetMusicianByFilter,
};
