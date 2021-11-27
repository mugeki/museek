import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal(props) {
	const { published } = props;
	let message, btnText;
	if (!published) {
		message = "Publish profile anda sebagai musisi?";
		btnText = "Publish";
	} else {
		message = "Unpublish profile anda dari musisi?";
		btnText = "Unpublish";
	}
	const onClickConfirm = () => {
		if (!published) {
			const timestamp = Date.now();
			const newPublishDate = new Date(timestamp).toISOString();
			props.onClick({ published: !published, date_published: newPublishDate });
		}
		props.onClick({ published: !published });
	};
	const onClickClose = () => {
		props.onClick(false);
	};
	return (
		<div className={`${styles.background} modal d-flex justify-content-center`}>
			<div className={`${styles.container} bg-white my-auto p-4 rounded`}>
				<p className="text-center">{message}</p>
				<div className="d-flex justify-content-center">
					<button
						className={`${styles.button1} rounded p-2 px-3 me-3`}
						onClick={onClickConfirm}
					>
						{btnText}
					</button>
					<button
						className={`${styles.button2} rounded p-2 px-3`}
						onClick={onClickClose}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}
