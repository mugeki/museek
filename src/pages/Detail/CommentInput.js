import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import LoadingSmall from "../../components/LoadingSmall";
// import useInsertComment from "../../hooks/useInsertComment";
import useGetUserProfile from "../../hooks/useGetUserProfile";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./CommentInput.module.css";

export default function CommentInput(props) {
	const { id: musicianId } = useParams();

	const userId = useSelector((state) => state.auth.userId);
	const { dataProfile, loadingProfile } = useGetUserProfile(userId);
	const [comment, setComment] = useState("");
	const [commenter, setCommenter] = useState({
		img_link: "",
		username: "",
	});

	useEffect(() => {
		let mounted = true;
		const onMount = () => {
			if (!loadingProfile && dataProfile) {
				setCommenter({ ...dataProfile.user_by_pk });
			}
		};
		if (mounted) onMount();
		return () => {
			mounted = false;
		};
	}, [loadingProfile, dataProfile]);

	const onChange = (e) => {
		setComment(e.target.value);
	};
	const onClick = () => {
		const timestamp = Date.now();
		const commentDate = new Date(timestamp).toISOString();
		props.onClick({
			musician_id: musicianId,
			comment,
			commenter: commenter.username,
			commenter_img: commenter.img_link,
			date_commented: commentDate,
		});
	};

	return (
		<>
			{!loadingProfile && (
				<div className={`${styles.container} d-flex flex-column rounded`}>
					<TextareaAutosize
						className={`${styles.input} w-100 p-2 border-0`}
						value={comment}
						type="textarea"
						placeholder="Tulis komentar..."
						onChange={onChange}
					/>
					<button
						className={`${styles.button} rounded p-1 px-3 m-2 ms-auto`}
						type="button"
						onClick={onClick}
					>
						{props.loadingInsert ? <LoadingSmall /> : "Post"}
					</button>
				</div>
			)}
		</>
	);
}
