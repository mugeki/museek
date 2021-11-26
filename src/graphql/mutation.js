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
	mutation MyMutation($id: Int) {
		update_user_by_pk(pk_columns: { id: $id }) {
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

export { RegisterUser, UpdateUser };
