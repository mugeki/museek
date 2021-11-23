import { Icon } from "@iconify/react";

export default function Comment() {
	return (
		<div
			className="d-flex flex-wrap mt-4 justify-content-between"
			style={{ borderBottom: "1px solid #8F8D8D" }}
		>
			<Icon
				icon="healthicons:ui-user-profile"
				color="#ccc"
				width="50"
				height="50"
				style={{ cursor: "pointer" }}
			/>
			<div className="d-flex flex-column flex-fill ms-1 ms-md-4 w-75">
				<h6 className="fw-bolder">namauser</h6>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sit leo
					ipsum, odio at. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Cum sit leo ipsum, odio at.
				</p>
				<p style={{ color: "#8F8D8D" }}>4 days ago</p>
			</div>
			<Icon
				icon="bi:trash-fill"
				color="#c4c4c4"
				width="18"
				height="18"
				className="align-self-end mb-3"
				style={{ cursor: "pointer" }}
			/>
		</div>
	);
}
