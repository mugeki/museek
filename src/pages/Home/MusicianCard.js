import styles from "./MusicianCard.module.css";

export default function MusicianCard(props) {
	return (
		<div
			className={`${styles.musician} d-inline-block border-0 card rounded bg-warning`}
		>
			<div className={`${styles.overlay} p-4 rounded`}>
				<h5 className="text-white fw-normal">Gitaris</h5>
				<h3 className="text-white">Nama Musisi</h3>
			</div>
		</div>
	);
}