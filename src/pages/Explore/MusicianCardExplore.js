import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../../firebase/firebase";
import { Icon } from "@iconify/react";
import styles from "./MusicianCardExplore.module.css";
// import profile from "../../daniel-angele-2gu4hKuFhi0-unsplash.jpg";
import { Link } from "react-router-dom";

export default function MusicianCardExplore(props) {
	const { id, profile, fullName, instrument, location, likes } = props;
	// console.log("profile", profile);
	// const storage = getStorage(app);
	// const imagesRef = ref(storage, profile.name);
	// getDownloadURL(ref(storage, imagesRef))
	// 	.then((url) => {
	// 		// `url` is the download URL for 'images/stars.jpg'

	// 		// This can be downloaded directly:
	// 		const xhr = new XMLHttpRequest();
	// 		xhr.responseType = "blob";
	// 		xhr.onload = (event) => {
	// 			const blob = xhr.response;
	// 		};
	// 		xhr.open("GET", url);
	// 		xhr.send();
	// 	})
	// 	.catch((error) => {
	// 		throw error;
	// 	});
	return (
		<div
			className={`${styles.musician} p-0 mb-4 me-md-3 me-lg-4 d-flex flex-column rounded shadow`}
		>
			<img
				src={profile}
				alt="musician"
				className={`${styles.profile} rounded-top`}
			/>
			<div className="d-flex flex-column justify-content-between p-4 h-100 rounded-bottom">
				<div className="d-flex justify-content-between bg-white w-100">
					<div className="">
						<h5 className="mb-1">{fullName}</h5>
						<h6 className="fw-normal">{instrument}</h6>
						<h6 className="fw-normal" style={{ color: "#8F8D8D" }}>
							{location}
						</h6>
					</div>
					<div className="text-center">
						<Icon icon="ant-design:heart-filled" color="#ea2323" width="31" />
						<p>
							{likes > 999
								? `${Number.parseFloat(likes / 1000).toPrecision(2)}k`
								: likes}
						</p>
					</div>
				</div>
				<Link
					className="nav-link text-black p-0"
					style={{ width: "fit-content" }}
					to={`/musician/${id}`}
				>
					Lebih Lanjut ›
				</Link>
			</div>
		</div>
	);
}
