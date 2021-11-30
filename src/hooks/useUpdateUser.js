import { useMutation } from "@apollo/client";
import { UpdateUser } from "../graphql/mutation";
import { GetUserProfile } from "../graphql/query";

export default function useUpdateUser() {
	const [updateUser, { loading: loadingUpdate }] = useMutation(UpdateUser, {
		refetchQueries: GetUserProfile,
	});
	return { updateUser, loadingUpdate };
}
