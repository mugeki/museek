import Navbar from "../../components/Navbar";
import NavbarGuest from "../../components/NavbarGuest";
import Comment from "./Comment";
import { Icon } from "@iconify/react";
import profile from "../../daniel-angele-2gu4hKuFhi0-unsplash.jpg";
import styles from "./Detail.module.css";

export default function Detail() {
	return (
		<div>
			<NavbarGuest />
			<div className="container d-flex justify-content-between py-4">
				<div className="d-flex flex-column">
					<div className="d-flex">
						<img
							src={profile}
							alt="musician"
							className={`${styles.profile} rounded`}
						/>
						<div className="ms-4">
							<h2 className="fw-bolder mb-1">Nama Musisi</h2>
							<h5>Saxophone</h5>
							<div className="d-flex">
								<Icon
									icon="ant-design:heart-outlined"
									color="#ea2323"
									width="24"
									height="24"
									style={{ cursor: "pointer" }}
								/>
								<p className="ms-1 my-0">123</p>
							</div>
							<p style={{ color: "#8F8D8D" }}>Bandung, Jawa Barat</p>
							<div>
								<h5 className="fw-bolder mt-5">Tentang</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
									sit leo ipsum, odio at. Amet tellus pellentesque ipsum
									senectus. Morbi orci, eleifend facilisis sit. In platea
									aliquet hendrerit ipsum convallis gravida egestas integer
									rutrum. Eget nec ligula sem aliquam pellentesque id.
								</p>
							</div>
						</div>
					</div>
					<div className="py-5">
						<h5 className="fw-bolder">Komentar (3)</h5>
						<Comment />
						<Comment />
						<Comment />
					</div>
				</div>
				<div className={`p-4 rounded ms-4 ${styles.sticky}`}>
					<h5 className="fw-bolder mb-4">Kontak</h5>
					<div className="d-flex">
						<Icon
							icon="akar-icons:whatsapp-fill"
							color="#8f8d8d"
							width="20"
							height="20"
						/>
						<p className="ms-2" style={{ color: "#8F8D8D" }}>
							08123456789
						</p>
					</div>
					<div className="d-flex">
						<Icon icon="carbon:email" color="#8f8d8d" width="20" height="20" />
						<p className="ms-2" style={{ color: "#8F8D8D" }}>
							example@gmail.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
