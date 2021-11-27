import { useMutation } from "@apollo/client";
import { UpdateUserStatus } from "../graphql/mutation";
import { GetUserProfile } from "../graphql/query";

export default function useUpdateUserStatus() {
	const [updateUserStatus, { loading: loadingUpdateStatus }] = useMutation(
		UpdateUserStatus,
		{
			refetchQueries: GetUserProfile,
		}
	);
	return { updateUserStatus, loadingUpdateStatus };
}
