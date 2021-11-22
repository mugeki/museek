import Navbar from "../../components/Navbar";
import NavbarGuest from "../../components/NavbarGuest";
import SearchInput from "./SearchInput";
import Footer from "../../components/Footer";
import MusicianCard from "./MusicianCard";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<div className="pb-4">
			<NavbarGuest />
			<div className={styles.hero}>
				<div className={`${styles.overlay} p-5`}>
					<div className="container mt-4">
						<div className="fw-bold fs-1 text-white">
							<p className="mb-0">Cari musisi yang pas</p>
							<p>buat keperluanmu</p>
						</div>
						<SearchInput />
					</div>
				</div>
				<div className="container my-5">
					<h1 className="fw-bold">Musisi popular</h1>
					<div className="d-flex justify-content-between py-3">
						<MusicianCard />
						<MusicianCard />
						<MusicianCard />
						<MusicianCard />
					</div>
				</div>
				<div className="container my-5">
					<h1 className="fw-bold">Musisi terbaru</h1>
					<div className="d-flex justify-content-between py-3">
						<MusicianCard />
						<MusicianCard />
						<MusicianCard />
						<MusicianCard />
					</div>
				</div>
			</div>
		</div>
	);
}
