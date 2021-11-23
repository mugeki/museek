import { Icon } from "@iconify/react";
import styles from "./MusicianCardExplore.module.css";
import profile from "../../daniel-angele-2gu4hKuFhi0-unsplash.jpg";
import { Link } from "react-router-dom";

export default function MusicianCardExplore(props) {
	return (
		<div
			className={`${styles.musician} p-0 mb-3 mb-md-0 d-flex flex-column rounded shadow`}
		>
			<img
				src={profile}
				alt="musician"
				className={`${styles.profile} rounded-top`}
			/>
			<div className="d-flex flex-column justify-content-between p-4 h-100 rounded-bottom">
				<div className="d-flex justify-content-between bg-white w-100">
					<div className="">
						<h5 className="mb-1">Nama Musisi</h5>
						<h6>Gitaris</h6>
					</div>
					<div className="text-center">
						<Icon icon="ant-design:heart-filled" color="#ea2323" width="31" />
						<p>123</p>
					</div>
				</div>
				<Link
					className="nav-link text-black p-0"
					style={{ width: "fit-content" }}
					to=""
				>
					Lebih Lanjut ›
				</Link>
			</div>
		</div>
	);
}
