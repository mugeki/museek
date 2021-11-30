import { gql } from "@apollo/client";

const RegisterUser = gql`
	mutation MyMutation(
		$username: String
		$email: String
		$password: String
		$full_name: String
		$phone: String
	) {
		insert_user_one(
			object: {
				username: $username
				email: $email
				password: $password
				full_name: $full_name
				phone: $phone
			}
		) {
			id
			username
			img_link
		}
	}
`;

const UpdateUser = gql`
	mutation MyMutation(
		$id: Int!
		$img_link: String
		$instrument: String
		$full_name: String
		$email: String
		$about: String
		$location: String
		$phone: String
		$username: String
	) {
		update_user_by_pk(
			pk_columns: { id: $id }
			_set: {
				img_link: $img_link
				instrument: $instrument
				full_name: $full_name
				email: $email
				about: $about
				location: $location
				phone: $phone
			}
		) {
			id
			username
			published
			phone
			password
			location
			instrument
			img_link
			full_name
			email
			date_published
			about
		}
		update_comments(
			where: { commenter: { _eq: $username } }
			_set: { commenter_img: $img_link }
		) {
			affected_rows
		}
	}
`;

const UpdateUserStatus = gql`
	mutation MyMutation(
		$id: Int!
		$published: Boolean
		$date_published: timestamptz
	) {
		update_user_by_pk(
			pk_columns: { id: $id }
			_set: { published: $published, date_published: $date_published }
		) {
			id
			published
		}
	}
`;

const InsertComment = gql`
	mutation MyMutation(
		$comment: String
		$commenter: String
		$commenter_img: String
		$date_commented: timestamptz
		$musician_id: Int
	) {
		insert_comments(
			objects: {
				comment: $comment
				commenter: $commenter
				commenter_img: $commenter_img
				date_commented: $date_commented
				musician_id: $musician_id
			}
		) {
			affected_rows
		}
	}
`;

const DeleteComment = gql`
	mutation MyMutation($id: Int!) {
		delete_comments_by_pk(id: $id) {
			comment
		}
	}
`;

const UpdateLikes = gql`
	mutation MyMutation(
		$user_id: Int!
		$liked_musician: _text
		$musician_id: Int!
		$likes: Int
	) {
		update_user(where: { id: { _eq: $musician_id } }, _set: { likes: $likes }) {
			affected_rows
		}
		update_user_by_pk(
			pk_columns: { id: $user_id }
			_set: { liked_musician: $liked_musician }
		) {
			id
			liked_musician
		}
	}
`;

export {
	RegisterUser,
	UpdateUser,
	UpdateUserStatus,
	InsertComment,
	DeleteComment,
	UpdateLikes,
};
