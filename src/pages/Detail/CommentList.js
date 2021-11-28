import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import useInsertComment from "../../hooks/useInsertComment";
import useDeleteComment from "../../hooks/useDeleteComment";
import useGetComments from "../../hooks/useGetComments";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

export default function CommentList(props) {
	const { musicianId } = props;
	const isLoggedIn = useSelector((state) => state.auth.login);
	const currentUsername = useSelector((state) => state.auth.username);
	const { dataComments, loadingComments } = useGetComments(musicianId);
	const { insertComment, loadingInsert } = useInsertComment();
	const { deleteComment, loadingDelete } = useDeleteComment();

	const onClickInsert = (value) => {
		insertComment({ variables: value });
	};

	const onClickDelete = (id) => {
		deleteComment({ variables: { id } });
	};

	return (
		<>
			<h5 className="fw-bolder">Komentar ({dataComments?.comments.length})</h5>
			{isLoggedIn && (
				<CommentInput onClick={onClickInsert} loadingInsert={loadingInsert} />
			)}
			{loadingComments || loadingDelete || loadingInsert ? (
				<Loading />
			) : (
				dataComments.comments.map((item) => (
					<Comment
						key={item.id}
						id={item.id}
						commenter={item.commenter}
						img={item.commenter_img}
						comment={item.comment}
						dateCommented={item.date_commented}
						currentUser={currentUsername}
						onClick={onClickDelete}
					/>
				))
			)}
		</>
	);
}
