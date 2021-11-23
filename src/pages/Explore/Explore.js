import Navbar from "../../components/Navbar";
import NavbarGuest from "../../components/NavbarGuest";
import MusicianCardExplore from "./MusicianCardExplore";
import SearchLokasiInput from "./SearchLokasiInput";
import CategoryDropdown from "./CategoryDropdown";
import SortDropdown from "./SortDropdown";
// import styles from "./Home.module.css";

export default function Explore() {
	return (
		<div className="pb-3">
			<NavbarGuest />
			<div className="container mt-4">
				<h1 className="fw-bold">Cari musisi</h1>
			</div>
			<div className="container mt-4 d-flex flex-column flex-md-row sticky-top bg-white w-100 py-4">
				<SearchLokasiInput />
				<div className="d-flex flex-row mt-3 mt-md-0">
					<CategoryDropdown />
					<SortDropdown />
				</div>
			</div>
			<div className="container my-3">
				<div className="d-flex flex-wrap justify-content-between py-3">
					<MusicianCardExplore />
					<MusicianCardExplore />
					<MusicianCardExplore />
					<MusicianCardExplore />
				</div>
				<div className="d-flex flex-wrap justify-content-between py-3">
					<MusicianCardExplore />
					<MusicianCardExplore />
					<MusicianCardExplore />
					<MusicianCardExplore />
				</div>
			</div>
		</div>
	);
}
