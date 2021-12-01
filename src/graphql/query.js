import { gql } from "@apollo/client";

const GetUserCredential = gql`
	query MyQuery($username: String, $password: String) {
		user(
			where: {
				_and: { username: { _eq: $username }, password: { _eq: $password } }
			}
		) {
			id
			img_link
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
			username
			password
			phone
			published
			liked_musician
		}
	}
`;

const GetPopularMusicianList = gql`
	query GetPopularMusician {
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
	query GetNewestMusician {
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
	query GetMusicianList(
		$date_published: order_by
		$likes: order_by
		$keyword: String
		$instrument: [String!]
		$offset: Int
	) {
		user(
			order_by: { date_published: $date_published, likes: $likes }
			where: {
				_or: [
					{ location: { _iregex: $keyword } }
					{ full_name: { _iregex: $keyword } }
				]
				instrument: { _in: $instrument }
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
		user_aggregate(
			where: {
				_or: [
					{ location: { _iregex: $keyword } }
					{ full_name: { _iregex: $keyword } }
				]
				instrument: { _in: $instrument }
				published: { _eq: true }
			}
		) {
			aggregate {
				count(columns: id)
			}
		}
	}
`;

const GetComments = gql`
	query MyQuery($musician_id: Int!) {
		comments(where: { musician_id: { _eq: $musician_id } }) {
			id
			comment
			commenter
			commenter_img
			date_commented
		}
	}
`;

export {
	GetUserCredential,
	GetUserProfile,
	GetPopularMusicianList,
	GetNewestMusicianList,
	GetMusicianDetailByID,
	GetMusicianByFilter,
	GetComments,
};
