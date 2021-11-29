import { useMutation } from "@apollo/client";
import { UpdateLikes } from "../graphql/mutation";

export default function useUpdateLikes() {
	const [updateLikes, { loading: loadingUpdateLikes }] =
		useMutation(UpdateLikes);
	return { updateLikes, loadingUpdateLikes };
}
