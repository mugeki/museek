import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal(props) {
	let message, btnText;
	if (props.type === "publish") {
		message = "Publish profile anda sebagai musisi?";
		btnText = "Publish";
	} else {
		message = "Unpublish profile anda dari musisi?";
		btnText = "Unpublish";
	}

	const onClick = (e) => {
		props.onClick(e.target.value);
	};
	return (
		<div className={`${styles.background} modal d-flex justify-content-center`}>
			<div className={`${styles.container} bg-white my-auto p-4 rounded`}>
				<p className="text-center">{message}</p>
				<div className="d-flex justify-content-center">
					<button className={`${styles.button1} rounded p-2 px-3 me-3`}>
						{btnText}
					</button>
					<button
						className={`${styles.button2} rounded p-2 px-3`}
						onClick={onClick}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}
