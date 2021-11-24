import Navbar from "../../components/Navbar";
import NavbarGuest from "../../components/NavbarGuest";
import SearchInput from "./SearchInput";
import MusicianCard from "./MusicianCard";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<div className="pb-3">
			<NavbarGuest />
			<div className={styles.hero}>
				<div className={`${styles.overlay} p-2 p-md-5`}>
					<div className="container mt-4">
						<div className="fw-bold fs-1 text-white">
							<p className="mb-0">Cari musisi yang pas</p>
							<p>buat keperluanmu</p>
						</div>
						<SearchInput />
					</div>
				</div>
			</div>
			<div className="container my-5">
				<h2 className="fw-bold">Musisi popular</h2>
				<div className="d-flex flex-wrap justify-content-between py-3">
					<MusicianCard />
					<MusicianCard />
					<MusicianCard />
					<MusicianCard />
				</div>
			</div>
			<div className="container my-5">
				<h2 className="fw-bold">Musisi terbaru</h2>
				<div className="d-flex flex-wrap justify-content-between py-3">
					<MusicianCard />
					<MusicianCard />
					<MusicianCard />
					<MusicianCard />
				</div>
			</div>
		</div>
	);
}
