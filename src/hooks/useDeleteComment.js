import { useMutation } from "@apollo/client";
import { DeleteComment } from "../graphql/mutation";
import { GetComments } from "../graphql/query";

export default function useDeleteComment(id) {
	const [deleteComment, { loading: loadingDelete }] = useMutation(
		DeleteComment,
		{ variables: { id }, refetchQueries: GetComments }
	);
	return { deleteComment, loadingDelete };
}
