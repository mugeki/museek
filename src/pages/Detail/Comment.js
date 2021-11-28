import { Icon } from "@iconify/react";

export default function Comment(props) {
	const { id, commenter, img, comment, dateCommented, currentUser } = props;
	const defaultImg =
		"https://firebasestorage.googleapis.com/v0/b/museek-d935c.appspot.com/o/default_avatar.png?alt=media&token=01f59951-b62a-462b-b50a-fb27de146e0c";

	const onClick = () => {
		props.onClick(id);
	};

	return (
		<div
			className="d-flex flex-wrap mt-4 justify-content-between"
			style={{ borderBottom: "1px solid #8F8D8D" }}
		>
			{img === defaultImg ? (
				<Icon
					icon="healthicons:ui-user-profile"
					color="#ccc"
					width="50"
					height="50"
					style={{ cursor: "pointer" }}
				/>
			) : (
				<img
					className="rounded-circle"
					src={img}
					alt="user"
					style={{ width: "50px", height: "50px" }}
				/>
			)}

			<div className="d-flex flex-column flex-fill ms-1 ms-md-4 w-75">
				<h6 className="fw-bolder">{commenter}</h6>
				<p>{comment}</p>
				<p style={{ color: "#8F8D8D" }}>4 days ago</p>
			</div>
			{currentUser === commenter ? (
				<Icon
					icon="bi:trash-fill"
					color="#c4c4c4"
					width="18"
					height="18"
					className="align-self-end mb-3"
					style={{ cursor: "pointer" }}
					onClick={onClick}
				/>
			) : (
				""
			)}
		</div>
	);
}
