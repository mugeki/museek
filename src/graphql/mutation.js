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
		$password: String
		$phone: String
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

export { RegisterUser, UpdateUser, UpdateUserStatus };
