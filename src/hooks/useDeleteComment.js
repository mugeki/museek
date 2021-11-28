import { useMutation } from "@apollo/client";
import { DeleteComment } from "../graphql/mutation";
import { GetComments } from "../graphql/query";

export default function useDeleteComment() {
	const [deleteComment, { loading: loadingDelete }] = useMutation(
		DeleteComment,
		{
			refetchQueries: [GetComments],
			awaitRefetchQueries: true,
		}
	);
	return { deleteComment, loadingDelete };
}
