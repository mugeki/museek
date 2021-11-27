import { gql } from "@apollo/client";

const GetUsernameAndPassword = gql`
	query MyQuery($username: String, $password: String) {
		user(
			where: {
				_and: { username: { _eq: $username }, password: { _eq: $password } }
			}
		) {
			id
			username
			password
		}
	}
`;

const GetUserProfile = gql`
	query MyQuery($id: Int!) {
		user_by_pk(id: $id) {
			id
			about
			email
			full_name
			img_link
			instrument
			location
			password
			phone
			published
		}
	}
`;

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
			date_published
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
		user(where: { id: { _eq: $id }, published: { _eq: true } }) {
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
		$date_published: order_by
		$likes: order_by
		$location: String
		$instrument: [String!]
		$offset: Int
	) {
		user(
			order_by: { date_published: $date_published, likes: $likes }
			where: {
				_or: {
					location: { _iregex: $location }
					instrument: { _in: $instrument }
				}
				published: { _eq: true }
			}
			offset: $offset
			limit: 4
		) {
			id
			full_name
			img_link
			likes
			location
			instrument
		}
	}
`;

export {
	GetUsernameAndPassword,
	GetUserProfile,
	GetPopularMusicianList,
	GetNewestMusicianList,
	GetMusicianDetailByID,
	GetMusicianByFilter,
};
