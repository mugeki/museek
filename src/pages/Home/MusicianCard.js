import { Link } from "react-router-dom";
import styles from "./MusicianCard.module.css";

export default function MusicianCard(props) {
	const { id, profile, fullName, instrument } = props;
	return (
		<Link
			className={`${styles.musician} mb-3 mb-md-0 d-inline-block border-0 card rounded`}
			to={`musician/${id}`}
		>
			<div
				className={`${styles.overlay} position-absolute rounded p-4 w-100 h-100`}
			>
				<h4 className="text-white">{fullName}</h4>
				<h5 className="text-white fw-normal">{instrument}</h5>
			</div>
			<img
				src={profile}
				alt="musician"
				className="rounded h-100 w-100"
				style={{ objectFit: "cover" }}
			/>
		</Link>
	);
}
